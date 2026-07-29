import datetime
import feedparser

# ==============================
# CATEGORY DETECTOR
# ==============================


def detect_category(title, content):
    text = f"{title} {content}".lower()

    # 🏛️ Politics
    politics_keywords = [
        "government",
        "minister",
        "parliament",
        "policy",
        "election",
        "bjp",
        "congress",
        "modi",
        "rahul gandhi",
        "foreign policy",
        "defence",
        "defense",
        "budget",
        "supreme court",
        "high court",
        "cabinet",
        "lok sabha",
        "rajya sabha",
    ]

    # ⚽ Sports
    sports_keywords = [
        "cricket",
        "football",
        "ipl",
        "fifa",
        "goal",
        "match",
        "rohit",
        "virat",
        "dhoni",
        "ashwin",
        "bumrah",
        "jadeja",
        "test",
        "odi",
        "t20",
        "wimbledon",
        "olympics",
        "badminton",
        "hockey",
    ]

    # 🤖 AI & Technology
    ai_keywords = [
        "artificial intelligence",
        "ai",
        "machine learning",
        "deep learning",
        "neural network",
        "llm",
        "chatgpt",
        "openai",
        "anthropic",
        "claude",
        "gemini",
        "google ai",
        "meta ai",
        "grok",
        "copilot",
        "perplexity",
        "cursor",
        "midjourney",
        "stable diffusion",
        "hugging face",
        "transformer",
        "generative ai",
        "robotics",
        "automation",
        "ai startup",
        "ai model",
        "large language model",
        "nvidia",
        "microsoft ai",
        "deepmind",
    ]

    if any(keyword in text for keyword in sports_keywords):
        return "sports"

    if any(keyword in text for keyword in politics_keywords):
        return "politics"

    if any(keyword in text for keyword in ai_keywords):
        return "ai"

    return None


# ==============================
# RSS SCRAPER
# ==============================


def fetch_news():
    feeds = [
        # India News
        "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
        "https://www.thehindu.com/news/national/feeder/default.rss",
        # AI & Technology
        "https://analyticsindiamag.com/feed/",
        "https://www.marktechpost.com/feed/",
        "https://www.artificialintelligence-news.com/feed/",
        "https://techcrunch.com/category/artificial-intelligence/feed/",
        "https://venturebeat.com/category/ai/feed/",
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

                title = entry.get("title", "")
                content = entry.get("summary", "")
                link = entry.get("link", "")

                published = entry.get("published") or entry.get("updated") or ""

                author = entry.get("author", "")

                image = ""

                if "media_content" in entry:
                    image = entry.media_content[0].get("url", "")

                elif "media_thumbnail" in entry:
                    image = entry.media_thumbnail[0].get("url", "")

                elif "image" in entry:
                    image = entry.image.get("href", "")

                if not title or not link:
                    continue

                # Remove duplicates
                if link in seen_links:
                    continue

                seen_links.add(link)

                category = detect_category(title, content)

                if not category:
                    continue

                text = f"{title} {content}".lower()

                # Keep only Indian Politics & Sports
                # Allow worldwide AI news
                if category != "ai":
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

                    if not any(word in text for word in india_keywords):
                        continue

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
