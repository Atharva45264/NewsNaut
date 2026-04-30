from app.database.mongo import articles_collection

def get_articles():
    return list(articles_collection.find({}, {"_id": 0}))