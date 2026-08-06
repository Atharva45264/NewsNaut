from app.youtube.transcript import get_video_transcript

text = get_video_transcript(
    "jxGJT1weu4w"
)

if text:
    print(text[:1500])
else:
    print("Transcript not available.")