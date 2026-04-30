from app.database.mongo import articles_collection
import datetime

USER_INTERESTS = ["AI", "technology", "startup", "machine learning"]

def rank_articles():
    today = datetime.datetime.utcnow().date()

    articles = list(articles_collection.find())

    filtered = []

    # 🔥 STEP 1: FILTER ONLY TODAY'S NEWS
    for article in articles:
        created = article.get("created_at")

        if created and created.date() == today:
            filtered.append(article)

    ranked = []

    # 🔥 STEP 2: APPLY YOUR EXISTING RANKING LOGIC
    for article in filtered:
        score = 0

        title = article.get("title", "")
        summary = article.get("summary_ai", "")

        text = (title + " " + summary).lower()

        for interest in USER_INTERESTS:
            if interest.lower() in text:
                score += 1

        article["score"] = score
        article.pop("_id", None)

        ranked.append(article)

    # 🔥 STEP 3: SORT
    ranked.sort(key=lambda x: x["score"], reverse=True)

    return ranked