import yt_dlp
from youtube_transcript_api import YouTubeTranscriptApi
from app.database.mongo import articles_collection
import datetime


# 🔥 USE PROPER CHANNEL VIDEO URLs
CHANNELS = [
    "https://www.youtube.com/@TanayCricket/videos",
    "https://www.youtube.com/@ashishcode/videos",
    "https://www.youtube.com/@LokeshBagora/videos"
]

def get_latest_video(channel_url):
    try:
        ydl = yt_dlp.YoutubeDL({
            "quiet": True,
            "extract_flat": True,
            "skip_download": True
        })

        info = ydl.extract_info(channel_url, download=False)

        if "entries" in info and len(info["entries"]) > 0:
            latest = info["entries"][0]

            return {
                "video_id": latest.get("id"),
                "title": latest.get("title"),
                "description": latest.get("description", "")
            }

    except Exception as e:
        print("❌ Error fetching video:", e)

    return None

def process_youtube():
    print("🔵 Processing YouTube...")

    for channel in CHANNELS:
        print(f"\n➡️ Checking channel: {channel}")

        video = get_latest_video(channel)

        if not video:
            continue

        # 🔥 avoid duplicate (same video every day)
        exists = articles_collection.find_one({"link": video["video_id"]})
        if exists:
            print("⚠️ Already exists, skipping")
            continue

        content = video["title"] + " " + video.get("description", "")

        if len(content) < 20:
            content = video["title"]

        articles_collection.insert_one({
            "title": video["title"],
            "link": video["video_id"],
            "content": content,
            "category": "youtube",
            "source": "youtube",
            "channel": channel,
            "created_at": datetime.datetime.utcnow()
        })

        print(f"✅ Added latest video: {video['title']}")

    print("\n✅ YouTube step completed")