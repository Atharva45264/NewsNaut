from app.scrapers.rss_scraper import fetch_news
from app.services.save_articles import save_articles
from app.services.summarize import summarize_articles
from app.services.email_service import send_email

from app.youtube.sync import sync_channels


def run_pipeline():
    print("\n==============================")
    print("🚀 Starting NewsNaut Pipeline")
    print("==============================\n")

    # ----------------------------
    # Fetch RSS News
    # ----------------------------

    print("📰 Fetching latest news...")

    news = fetch_news()

    save_articles(news)

    print(f"✅ {len(news)} articles fetched.\n")

    # ----------------------------
    # AI News Summaries
    # ----------------------------

    print("🤖 Generating AI news summaries...")

    summarize_articles()

    print("✅ News summaries completed.\n")

    # ----------------------------
    # YouTube Sync
    # ----------------------------

    print("📺 Checking tracked YouTube channels...")

    result = sync_channels()

    print(
        f"✅ {result['updated']} channel(s) updated.\n"
    )

    # ----------------------------
    # Daily Email
    # ----------------------------

    print("📧 Sending daily digest...")

    send_email()

    print("✅ Email sent.\n")

    print("==============================")
    print("🎉 Pipeline Completed Successfully")
    print("==============================")