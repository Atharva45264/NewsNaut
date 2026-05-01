from groq import Groq  # type: ignore
from app.database.mongo import articles_collection
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def clean_summary(text: str) -> str:
    """Remove unwanted AI phrases and clean output"""
    if not text:
        return ""

    unwanted_phrases = [
        "Here's a summary:",
        "Here is a summary:",
        "Summary:",
        "What happened:",
        "Why it matters:",
        "In summary:",
    ]

    for phrase in unwanted_phrases:
        text = text.replace(phrase, "")

    return text.strip()


def summarize_articles():
    # 🔥 PRIORITY: summarize YouTube first
    youtube_articles = list(
        articles_collection.find({
            "summary_ai": {"$exists": False},
            "source": "youtube"
        }).limit(5)
    )

    # 🔥 Then summarize normal news
    news_articles = list(
        articles_collection.find({
            "summary_ai": {"$exists": False},
            "source": {"$ne": "youtube"}
        }).limit(5)
    )

    # Combine both
    articles = youtube_articles + news_articles

    print(f"Summarizing {len(articles)} articles...")

    for article in articles:
        content = article.get("content", "")

        # 🔥 Skip empty content
        if not content:
            continue

        # 🔥 Different prompt for YouTube
        if article.get("source") == "youtube":
            prompt = f"""
This is a YouTube video title and description.

Write a short 2-3 line explanation of what this video is likely about.

Do NOT ask questions.
Do NOT say "I don't know".
Do NOT mention missing information.

Content:
{content}
"""
        else:
            content = content[:1500]

            prompt = f"""
You are a professional news editor.

Write a concise news summary in 3-4 lines.

STRICT RULES:
- Only return the summary
- No headings
- No extra text

Article:
{content}
"""

        try:
            response = client.chat.completions.create(
                model="llama-3.1-8b-instant",
                messages=[{"role": "user", "content": prompt}],
                timeout=10
            )

            summary = response.choices[0].message.content.strip()

            # 🔥 Clean unwanted phrases
            summary = clean_summary(summary)

            # 🔥 Save to DB
            articles_collection.update_one(
                {"_id": article["_id"]},
                {"$set": {"summary_ai": summary}}
            )

            print(f"✅ Summarized: {article['title'][:60]}")

        except Exception as e:
            print("❌ Error summarizing:", e)

    print("Summarization step completed")