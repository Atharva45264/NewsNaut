from app.database.mongo import articles_collection

USER_INTERESTS = [
    "AI",
    "technology",
    "startup",
    "machine learning",
]


def rank_articles():
    # Fetch all summarized articles
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

    ranked = []

    for article in articles:
        score = 0

        title = article.get("title", "")
        summary = article.get("summary_ai", "")

        text = f"{title} {summary}".lower()

        for interest in USER_INTERESTS:
            if interest.lower() in text:
                score += 1

        article["score"] = score

        article.pop("_id", None)

        ranked.append(article)

    # Sort by score first, newest article second
    ranked.sort(
        key=lambda x: (
            x["score"],
            x.get("created_at")
        ),
        reverse=True,
    )

    return ranked