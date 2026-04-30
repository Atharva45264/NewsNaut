from app.scrapers.rss_scraper import fetch_news
from app.services.save_articles import save_articles
from app.services.summarize import summarize_articles
from app.services.email_service import send_email

def run_pipeline():
    print("Fetching news...")
    data = fetch_news()
    save_articles(data)

    print("Summarizing...")
    summarize_articles()   

    print("Sending email...")
    send_email()

    print("Done!")