from app.database.mongo import bookmarks_collection, articles_collection
from datetime import datetime


def add_bookmark(user_id: str, link: str):
    existing = bookmarks_collection.find_one({
        "userId": user_id,
        "link": link
    })

    if existing:
        existing["_id"] = str(existing["_id"])
        return existing

    article = articles_collection.find_one({"link": link})

    if not article:
        return {"error": "Article not found"}

    bookmark = {
    "userId": user_id,
    "title": article.get("title"),
    "link": article.get("link"),
    "image": article.get("image"),

    "summary": article.get("summary_ai"),
    "content": article.get("content"),

    "source": article.get("source"),
    "category": article.get("category"),
    "published_at": article.get("published_at"),
    "createdAt": datetime.utcnow()
}

    result = bookmarks_collection.insert_one(bookmark)

    bookmark["_id"] = str(result.inserted_id)

    return bookmark


def remove_bookmark(user_id: str, link: str):
    result = bookmarks_collection.delete_one({
        "userId": user_id,
        "link": link
    })

    return {
        "success": result.deleted_count > 0
    }


def get_bookmarks(user_id: str):
    bookmarks = list(
        bookmarks_collection.find(
            {"userId": user_id}
        ).sort("createdAt", -1)
    )

    for bookmark in bookmarks:
        bookmark["_id"] = str(bookmark["_id"])

    return bookmarks


def is_bookmarked(user_id: str, link: str):
    bookmark = bookmarks_collection.find_one({
        "userId": user_id,
        "link": link
    })

    return bookmark is not None