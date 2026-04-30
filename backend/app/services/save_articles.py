from app.database.mongo import articles_collection

def save_articles(data):
    if not data:
        return

    articles_collection.insert_many(data)