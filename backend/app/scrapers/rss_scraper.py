import feedparser
import datetime


# 🔥 CATEGORY DETECTOR (CORE FIX)
def detect_category(title, content):
    text = (title + " " + content).lower()

    # 🏛️ POLITICS (STRICT)
    politics_keywords = [
    "government", "minister", "parliament", "policy",
    "election", "bjp", "congress", "modi", "rahul gandhi",
    "foreign policy", "defence", "budget"
]

    # ⚽ SPORTS (STRICT)
    sports_keywords = [
        "cricket", "football", "ipl", "fifa", "goal",
        "match", "rohit", "virat", "dhoni", "ashwin"
    ]

    # 🤖 AI (VERY STRICT)
    ai_keywords = [
        "artificial intelligence", "machine learning",
        "chatgpt", "openai", "llm", "ai model",
        "neural network", "deep learning"
    ]

    # 🔥 PRIORITY ORDER (IMPORTANT)
    if any(k in text for k in sports_keywords):
        return "sports"

    if any(k in text for k in politics_keywords):
        return "politics"

    if any(k in text for k in ai_keywords):
        return "ai"

    return None

def fetch_news():
    # 🔥 MIXED RELIABLE FEEDS (no fixed category)
    feeds = [
        "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
        "https://www.thehindu.com/news/national/feeder/default.rss",
        "https://analyticsindiamag.com/feed/"
    ]

    articles = []

    for url in feeds:
        feed = feedparser.parse(url)

        for entry in feed.entries:
            title = entry.get("title", "")
            content = entry.get("summary", "")

            text = (title + " " + content).lower()

            # 🔥 INDIA FILTER (flexible)
            if not any(k in text for k in ["india", "indian", "delhi", "mumbai"]):
                continue

            # 🔥 DETECT CATEGORY
            category = detect_category(title, content)

            if not category:
                continue  # skip irrelevant news

            articles.append({
                "title": title,
                "link": entry.get("link", ""),
                "content": content,
                "category": category,
                "created_at": datetime.datetime.utcnow()
            })

    return articles