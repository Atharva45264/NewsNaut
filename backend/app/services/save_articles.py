from app.database.mongo import articles_collection

def save_articles(data):
    for item in data:
        # check if already exists
        existing = articles_collection.find_one({"link": item["link"]})

        if not existing:
            articles_collection.insert_one(item)