from groq import Groq
from app.database.mongo import articles_collection
from app.prompts.summary_prompts import (
    NEWS_PROMPT,
    YOUTUBE_PROMPT,
)

import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

MODEL = "llama-3.1-8b-instant"
SUMMARY_LIMIT = 100


def clean_summary(text: str):
    if not text:
        return ""

    unwanted = [
        "Here's a summary:",
        "Here is a summary:",
        "Summary:",
        "What happened:",
        "Why it matters:",
        "In summary:",
    ]

    for item in unwanted:
        text = text.replace(item, "")

    return text.strip()


def generate_summary(prompt: str):

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.3,
    )

    return response.choices[0].message.content.strip()


def summarize_articles():

    youtube_articles = list(
        articles_collection.find(
            {
                "summary_ai": {"$exists": False},
                "source": "youtube",
            }
        ).limit(SUMMARY_LIMIT)
    )

    news_articles = list(
        articles_collection.find(
            {
                "summary_ai": {"$exists": False},
                "source": {"$ne": "youtube"},
            }
        ).limit(SUMMARY_LIMIT)
    )

    articles = youtube_articles + news_articles

    print(f"\n🧠 Summarizing {len(articles)} articles...\n")

    success = 0
    failed = 0

    for article in articles:

        content = article.get("content", "")

        if not content:
            continue

        try:

            if article.get("source") == "youtube":
                prompt = YOUTUBE_PROMPT.format(content=content)
            else:
                prompt = NEWS_PROMPT.format(
                    content=content[:2000]
                )

            summary = generate_summary(prompt)

            summary = clean_summary(summary)

            articles_collection.update_one(
                {"_id": article["_id"]},
                {
                    "$set": {
                        "summary_ai": summary,
                    }
                },
            )

            success += 1

            print(f"✅ {article['title'][:70]}")

        except Exception as e:

            failed += 1

            print(f"❌ {article['title'][:70]}")
            print(e)

    print("\n==============================")
    print(f"✅ Success : {success}")
    print(f"❌ Failed  : {failed}")
    print("==============================")
    print("✅ Summarization Completed\n")