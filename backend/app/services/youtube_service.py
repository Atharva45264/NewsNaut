import yt_dlp
from youtube_transcript_api import YouTubeTranscriptApi
from app.database.mongo import articles_collection
import datetime


# 🔥 USE PROPER CHANNEL VIDEO URLs
CHANNELS = [
    "https://www.youtube.com/c/OpenAI/videos",
    "https://www.youtube.com/c/lexfridman/videos"
]


def get_latest_video(channel_url):
    try:
        ydl = yt_dlp.YoutubeDL({
            "quiet": True,
            "extract_flat": True
        })

        info = ydl.extract_info(channel_url, download=False)

        if "entries" in info and len(info["entries"]) > 0:
            latest = info["entries"][0]

            print(f"🎥 Found video: {latest.get('title')}")

            return {
                "video_id": latest.get("id"),
                "title": latest.get("title")
            }

    except Exception as e:
        print("❌ Error fetching video:", e)

    return None


def get_transcript(video_id):
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)

        text = " ".join([t["text"] for t in transcript])

        print("📝 Transcript fetched")

        return text[:1500]

    except Exception as e:
        print("❌ Transcript error:", e)
        return ""


def process_youtube():
    print("🔵 Processing YouTube...")

    for channel in CHANNELS:
        print(f"\n➡️ Checking channel: {channel}")

        video = get_latest_video(channel)

        if not video:
            print("❌ No video found")
            continue

        # 🔥 CHECK DUPLICATE
        exists = articles_collection.find_one({"link": video["video_id"]})

        if exists:
            print("⚠️ Already exists, skipping")
            continue

        transcript = get_transcript(video["video_id"])

        if not transcript:
            print("❌ No transcript, skipping")
            continue

        # 🔥 SAVE TO DB
        articles_collection.insert_one({
            "title": video["title"],
            "link": video["video_id"],
            "content": transcript,
            "category": "ai",
            "source": "youtube",
            "created_at": datetime.datetime.utcnow()
        })

        print(f"✅ Added video: {video['title']}")

    print("\n✅ YouTube step completed")