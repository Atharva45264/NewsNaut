import sys
import youtube_transcript_api

print("Python:", sys.executable)
print("Transcript API:", youtube_transcript_api.__file__)

from app.youtube.transcript import get_video_transcript

text = get_video_transcript("2X2V3xv_jik")

print("Success:", text is not None)