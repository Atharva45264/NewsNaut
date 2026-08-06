from app.database.mongo import youtube_collection
from app.youtube.youtube_api import get_latest_video


def sync_channels():
    channels = list(youtube_collection.find())

    updated = 0

    for channel in channels:

        latest = get_latest_video(
            channel["channelId"]
        )

        if not latest:
            continue

        current = channel.get("latestVideo", {})

        if (
            current.get("videoId")
            == latest["videoId"]
        ):
            continue

        latest["summary"] = ""
        latest["summaryGenerated"] = False

        youtube_collection.update_one(
            {
                "_id": channel["_id"]
            },
            {
                "$set": {
                    "latestVideo": latest
                }
            },
        )

        updated += 1

    return {
        "updated": updated
    }