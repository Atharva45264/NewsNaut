from datetime import datetime
from app.database.mongo import youtube_collection


MAX_CHANNELS = 3


def add_channel(user_id: str, url: str):
    # Check if already exists
    existing = youtube_collection.find_one({
        "userId": user_id,
        "url": url
    })

    if existing:
        existing["_id"] = str(existing["_id"])
        return existing

    # Check limit
    count = youtube_collection.count_documents({
        "userId": user_id
    })

    if count >= MAX_CHANNELS:
        return {
            "error": "Maximum of 3 channels allowed."
        }

    channel = {
        "userId": user_id,
        "url": url,
        "createdAt": datetime.utcnow()
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
        "url": url
    })

    return {
        "success": result.deleted_count > 0
    }