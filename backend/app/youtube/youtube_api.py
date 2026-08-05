import requests
import os

YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")


def get_channel_details(channel_url: str):
    """
    Returns channel details from a YouTube URL.

    Example Input:
    https://youtube.com/@fireship
    """

    if "@" not in channel_url:
        raise Exception("Invalid YouTube channel URL.")

    handle = channel_url.split("@")[-1].split("/")[0]

    search_url = (
        "https://www.googleapis.com/youtube/v3/search"
    )

    params = {
        "part": "snippet",
        "q": handle,
        "type": "channel",
        "maxResults": 1,
        "key": YOUTUBE_API_KEY,
    }

    response = requests.get(
        search_url,
        params=params,
        timeout=15,
    )

    response.raise_for_status()

    data = response.json()

    items = data.get("items", [])

    if not items:
        raise Exception("Channel not found.")

    channel = items[0]

    snippet = channel["snippet"]

    return {
        "channelId": channel["id"]["channelId"],
        "channelName": snippet["title"],
        "handle": handle,
        "thumbnail": snippet["thumbnails"]["high"]["url"],
        "description": snippet["description"],
    }