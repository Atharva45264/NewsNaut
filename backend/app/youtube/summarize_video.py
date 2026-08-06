from app.services.summarize import (
    generate_summary,
    clean_summary,
)

from app.prompts.summary_prompts import (
    YOUTUBE_PROMPT,
)


def summarize_video(transcript: str):
    """
    Generate AI summary for a YouTube transcript.
    """

    if not transcript:
        return ""

    try:
        prompt = YOUTUBE_PROMPT.format(
            content=transcript[:12000]
        )

        summary = generate_summary(prompt)

        summary = clean_summary(summary)

        return summary

    except Exception as e:
        print("❌ Video Summary Error:", e)
        return ""