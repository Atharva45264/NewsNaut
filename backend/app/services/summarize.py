from groq import Groq # type: ignore
from app.database.mongo import articles_collection
import os
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def summarize_articles():
    articles = list(articles_collection.find())

    for article in articles[:10]:
        if "summary_ai" in article:
            continue

        content = article.get("content", "")

        if not content or len(content) < 50:
            continue

        try:
            response = client.chat.completions.create(
                model="llama3-8b-8192",
                messages=[
                    {"role": "user", "content": f"Summarize this:\n{content}"}
                ]
            )

            summary = response.choices[0].message.content

            articles_collection.update_one(
                {"_id": article["_id"]},
                {"$set": {"summary_ai": summary}}
            )

        except Exception as e:
            print("Error:", e)

    print("Summaries added")