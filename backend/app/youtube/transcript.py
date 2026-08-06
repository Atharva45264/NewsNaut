from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    NoTranscriptFound,
    TranscriptsDisabled,
)


def get_video_transcript(video_id: str):
    try:
        transcript = YouTubeTranscriptApi().fetch(video_id)

        text = " ".join(
            snippet.text for snippet in transcript
        )

        return text

    except TranscriptsDisabled:
        print("❌ Transcripts are disabled for this video.")
        return None

    except NoTranscriptFound:
        print("❌ No transcript available for this video.")
        return None

    except Exception as e:
        print("❌", e)
        return None