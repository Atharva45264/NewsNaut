from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.database.mongo import youtube_collection
from app.youtube.transcript import get_video_transcript
from app.youtube.summarize_video import summarize_video


from app.youtube.service import (
    add_channel,
    get_channels,
    remove_channel,
)

from app.youtube.sync import sync_channels

router = APIRouter(
    prefix="/youtube",
    tags=["YouTube Tracker"],
)


class AddChannelRequest(BaseModel):
    userId: str
    url: str


class DeleteChannelRequest(BaseModel):
    userId: str
    url: str


@router.post("/")
def create_channel(request: AddChannelRequest):
    result = add_channel(
        request.userId,
        request.url,
    )

    if "error" in result:
        raise HTTPException(
            status_code=400,
            detail=result["error"],
        )

    return result


@router.get("/sync")
def sync_youtube_channels():
    return sync_channels()

@router.get("/test-summary")
def test_summary():
    channel = youtube_collection.find_one()

    latest = channel["latestVideo"]

    video_id = latest["videoId"]

    print("=" * 50)
    print("VIDEO:", video_id)

    from app.youtube.transcript import get_video_transcript
    import sys
    import youtube_transcript_api

    print("Python:", sys.executable)
    print("Transcript API:", youtube_transcript_api.__file__)

    transcript = get_video_transcript(video_id)

    print("TRANSCRIPT:", transcript is not None)

    if transcript:
        print(transcript[:300])

    return {
        "video": latest["title"],
        "videoId": video_id,
        "transcriptFound": transcript is not None,
        "length": len(transcript) if transcript else 0,
    }


@router.post("/generate-summary/{channel_id}")
def generate_video_summary(channel_id: str):

    channel = youtube_collection.find_one({
        "channelId": channel_id
    })

    if not channel:
        raise HTTPException(
            status_code=404,
            detail="Channel not found"
        )

    latest = channel.get("latestVideo")

    if not latest:
        raise HTTPException(
            status_code=404,
            detail="Latest video not found"
        )

    transcript = get_video_transcript(
        latest["videoId"]
    )

    if not transcript:
        raise HTTPException(
            status_code=400,
            detail="Transcript unavailable"
        )

    print("🧠 Generating AI Summary...")

    summary = summarize_video(transcript)

    youtube_collection.update_one(
        {
            "_id": channel["_id"]
        },
        {
            "$set": {
                "latestVideo.summary": summary,
                "latestVideo.summaryGenerated": True,
            }
        }
    )

    return {
        "message": "Summary generated successfully",
        "summary": summary,
    }

@router.get("/{user_id}")
def fetch_channels(user_id: str):
    return get_channels(user_id)


@router.delete("/")
def delete_channel(request: DeleteChannelRequest):
    return remove_channel(
        request.userId,
        request.url,
    )