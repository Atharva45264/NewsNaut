from app.services.get_articles import get_articles


def dashboard_stats():
    articles = get_articles()

    return {
        "total_articles": len(articles),
        "summarized": len([a for a in articles if a.get("summary_ai")]),
        "sources": len(set(a.get("source") for a in articles if a.get("source"))),
        "categories": len(
            set(a.get("category") for a in articles if a.get("category"))
        ),
    }
