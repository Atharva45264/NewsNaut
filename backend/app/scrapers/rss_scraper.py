import feedparser

def fetch_news():
    feeds = {
        "politics": [
            "https://feeds.bbci.co.uk/news/politics/rss.xml"
        ],
        "sports": [
            "https://feeds.bbci.co.uk/sport/rss.xml"
        ],
        "ai": [
            "https://openai.com/blog/rss.xml"
        ]
    }

    articles = []

    for category, urls in feeds.items():
        for url in urls:
            feed = feedparser.parse(url)

            for entry in feed.entries:
                articles.append({
                    "title": entry.get("title", ""),
                    "link": entry.get("link", ""),
                    "content": entry.get("summary", ""),
                    "category": category   # 🔥 THIS IS THE FIX
                })

    return articles