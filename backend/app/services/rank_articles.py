from app.database.mongo import articles_collection
import datetime

USER_INTERESTS = [
    "AI",
    "technology",
    "startup",
    "machine learning",
]


def rank_articles():
    today = datetime.datetime.utcnow().date()

    # Only fetch articles that already have an AI summary
    articles = list(
        articles_collection.find(
            {
                "summary_ai": {
                    "$exists": True,
                    "$ne": ""
                }
            }
        )
    )

    filtered = []

    # Keep only today's news
    for article in articles:
        created = article.get("created_at")

        if created and created.date() == today:
            filtered.append(article)

    ranked = []

    for article in filtered:
        score = 0

        title = article.get("title", "")
        summary = article.get("summary_ai", "")

        text = f"{title} {summary}".lower()

        for interest in USER_INTERESTS:
            if interest.lower() in text:
                score += 1

        article["score"] = score

        # Remove MongoDB ObjectId before returning
        article.pop("_id", None)

        ranked.append(article)

    # Highest score first
    ranked.sort(key=lambda x: x["score"], reverse=True)

    return ranked