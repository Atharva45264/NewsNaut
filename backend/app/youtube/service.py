from datetime import datetime

from app.database.mongo import youtube_collection

from app.youtube.youtube_api import (
    get_channel_details,
    get_latest_video,
)

MAX_CHANNELS = 3


def add_channel(user_id: str, url: str):
    # Check if channel already exists
    existing = youtube_collection.find_one({
        "userId": user_id,
        "url": url,
    })

    if existing:
        existing["_id"] = str(existing["_id"])
        return existing

    # Maximum 3 channels per user
    count = youtube_collection.count_documents({
        "userId": user_id
    })

    if count >= MAX_CHANNELS:
        return {
            "error": "Maximum of 3 channels allowed."
        }

    # Fetch channel details
    details = get_channel_details(url)

    # Fetch latest uploaded video
    latest_video = get_latest_video(
    details["channelId"]
)

    if latest_video:
      latest_video["summary"] = ""
      latest_video["summaryGenerated"] = False

    channel = {
        "userId": user_id,

        "url": url,

        "channelId": details["channelId"],

        "channelName": details["channelName"],

        "handle": details["handle"],

        "thumbnail": details["thumbnail"],

        "description": details["description"],

        "latestVideo": latest_video,

        "createdAt": datetime.utcnow(),
    }

    result = youtube_collection.insert_one(channel)

    channel["_id"] = str(result.inserted_id)

    return channel


def get_channels(user_id: str):
    channels = list(
        youtube_collection.find(
            {"userId": user_id}
        ).sort("createdAt", -1)
    )

    for channel in channels:
        channel["_id"] = str(channel["_id"])

    return channels


def remove_channel(user_id: str, url: str):
    result = youtube_collection.delete_one({
        "userId": user_id,
        "url": url,
    })

    return {
        "success": result.deleted_count > 0
    }