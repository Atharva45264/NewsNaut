from app.database.mongo import articles_collection

USER_INTERESTS = ["AI", "technology", "startup", "machine learning"]

def rank_articles():
    articles = list(articles_collection.find())

    ranked = []

    for article in articles:
        score = 0

        title = article.get("title", "")
        summary = article.get("summary_ai", "")  # 🔥 safe access

        text = (title + " " + summary).lower()

        for interest in USER_INTERESTS:
            if interest.lower() in text:
                score += 1

        article["score"] = score

        # remove Mongo _id (important for JSON)
        article.pop("_id", None)

        ranked.append(article)

    ranked.sort(key=lambda x: x["score"], reverse=True)

    return ranked[:20]