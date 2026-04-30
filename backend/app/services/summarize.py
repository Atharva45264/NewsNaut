from groq import Groq  # type: ignore
from app.database.mongo import articles_collection
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def summarize_articles():
    # 🔥 ONLY fetch articles without summary (LIMITED)
    articles = list(
        articles_collection.find({"summary_ai": {"$exists": False}}).limit(5)
    )

    print(f"Summarizing {len(articles)} articles...")

    for article in articles:
        content = article.get("content", "")

        if not content or len(content) < 100:
            continue

        content = content[:1500]

        prompt = f"""
Summarize the news in 3-4 clean lines.

Rules:
- Do NOT include phrases like "Here is a summary"
- Do NOT include headings like "What happened"
- Write like a professional news brief
- Keep it natural and readable
        Article:
        {content}
        """

        try:
            response = client.chat.completions.create(
                model="llama-3.1-8b-instant",
                messages=[{"role": "user", "content": prompt}],
                timeout=10   # 🔥 PREVENT HANGING
            )

            summary = response.choices[0].message.content.strip()

            articles_collection.update_one(
                {"_id": article["_id"]},
                {"$set": {"summary_ai": summary}}
            )

            print(f"✅ Summarized: {article['title'][:50]}")

        except Exception as e:
            print("❌ Error:", e)

    print("Summarization step completed")