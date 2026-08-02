import datetime
import feedparser
from bs4 import BeautifulSoup
from app.utils.image_extractor import extract_article_image


def detect_category(title, content):
    text = f"{title} {content}".lower()

    category_keywords = {
        "ai": [
            "artificial intelligence",
            "machine learning",
            "deep learning",
            "llm",
            "chatgpt",
            "openai",
            "gemini",
            "claude",
            "anthropic",
            "grok",
            "copilot",
            "perplexity",
            "robotics",
            "automation",
            "nvidia",
            "deepmind",
            "transformer",
            "hugging face",
            "generative ai",
        ],
        "politics": [
            "government",
            "minister",
            "parliament",
            "policy",
            "election",
            "bjp",
            "congress",
            "modi",
            "rahul gandhi",
            "cabinet",
            "supreme court",
            "lok sabha",
            "rajya sabha",
            "budget",
        ],
        "sports": [
            "cricket",
            "football",
            "ipl",
            "fifa",
            "goal",
            "match",
            "rohit",
            "virat",
            "dhoni",
            "bumrah",
            "jadeja",
            "wimbledon",
            "olympics",
            "badminton",
            "hockey",
        ],
        "health": [
            "health",
            "hospital",
            "doctor",
            "medical",
            "medicine",
            "covid",
            "virus",
            "vaccine",
            "disease",
            "fitness",
            "wellness",
            "nutrition",
            "who",
            "mental health",
        ],
        "education": [
            "education",
            "student",
            "students",
            "school",
            "schools",
            "college",
            "university",
            "exam",
            "exams",
            "cbse",
            "icse",
            "ugc",
            "neet",
            "jee",
            "syllabus",
            "admission",
            "learning",
        ],
        "food": [
            "food",
            "restaurant",
            "recipe",
            "chef",
            "nutrition",
            "diet",
            "fssai",
            "cuisine",
            "cooking",
            "meal",
        ],
        "entertainment": [
            "movie",
            "film",
            "bollywood",
            "hollywood",
            "actor",
            "actress",
            "ott",
            "netflix",
            "amazon prime",
            "music",
            "celebrity",
            "trailer",
            "cinema",
        ],
        "business": [
            "business",
            "startup",
            "economy",
            "economic",
            "stock",
            "stocks",
            "market",
            "markets",
            "sensex",
            "nifty",
            "rbi",
            "reserve bank",
            "sebi",
            "gdp",
            "inflation",
            "bank",
            "banking",
            "investment",
            "investor",
            "company",
            "companies",
            "ipo",
            "finance",
            "financial",
            "profit",
            "revenue",
            "share",
            "shares",
        ],
        "science": [
            "science",
            "research",
            "nasa",
            "space",
            "scientist",
            "experiment",
            "discovery",
            "astronomy",
            "physics",
            "biology",
            "chemistry",
        ],
        "world": [
            "usa",
            "united states",
            "china",
            "russia",
            "ukraine",
            "israel",
            "iran",
            "pakistan",
            "afghanistan",
            "global",
            "international",
            "foreign",
            "world",
            "united nations",
            "eu",
        ],
    }

    words = set(text.split())

    scores = {}

    for category, keywords in category_keywords.items():

        score = 0

        for keyword in keywords:

            if " " in keyword:
                if keyword in text:
                    score += 1
            else:
                if keyword in words:
                    score += 1

        if score:
            scores[category] = score

    if not scores:
        return None

    return max(scores, key=scores.get)


# ==============================
# RSS SCRAPER
# ==============================


def fetch_news():
    feeds = [
        # 🇮🇳 India
        "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
        "https://www.thehindu.com/news/national/feeder/default.rss",
        # 🤖 AI
        "https://analyticsindiamag.com/feed/",
        "https://www.marktechpost.com/feed/",
        "https://techcrunch.com/category/artificial-intelligence/feed/",
        "https://venturebeat.com/category/ai/feed/",
        # 💼 Business
        "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
        "https://www.moneycontrol.com/rss/business.xml",
        # ❤️ Health
        "https://www.medicalnewstoday.com/rss",
        # 🎓 Education
        "https://www.indiatoday.in/education-today/rss",
        # 🍔 Food
        "https://www.seriouseats.com/rss",
        # 🎬 Entertainment
        "https://www.bollywoodhungama.com/feed/",
        # 🔬 Science
        "https://www.sciencedaily.com/rss/all.xml",
    ]

    articles = []
    seen_links = set()

    for url in feeds:
        print(f"📡 Fetching: {url}")

        try:
            feed = feedparser.parse(url)

            if feed.bozo:
                print(f"⚠️ Couldn't parse: {url}")

            source = feed.feed.get("title", "Unknown Source").split("|")[-1].strip()

            for entry in feed.entries:

                title = entry.get("title", "").strip()
                content = entry.get("summary", "")
                link = entry.get("link", "").strip()

                published = entry.get("published") or entry.get("updated") or ""

                author = entry.get("author", "")

                if not title or not link:
                    continue

                if link in seen_links:
                    continue

                seen_links.add(link)

                category = detect_category(title, content)

                print("=" * 60)
                print(title)
                print("Detected:", category)

                if not category:
                    continue

                text = f"{title} {content}".lower()

                if category not in ["ai", "business", "science", "world"]:
                    india_keywords = [
                        "india",
                        "indian",
                        "delhi",
                        "mumbai",
                        "bengaluru",
                        "kolkata",
                        "chennai",
                        "hyderabad",
                        "pune",
                    ]

                    if not any(city in text for city in india_keywords):
                        continue

                image = extract_article_image(link)

                articles.append(
                    {
                        "title": title,
                        "link": link,
                        "content": content,
                        "category": category,
                        "source": source,
                        "author": author,
                        "published_at": published,
                        "image": image,
                        "created_at": datetime.datetime.utcnow(),
                    }
                )

        except Exception as e:
            print(f"❌ Error reading {url}")
            print(e)

    print(f"\n✅ Total Articles Collected: {len(articles)}")

    return articles
