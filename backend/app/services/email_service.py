import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv

from app.services.rank_articles import rank_articles
from app.templates.email_template import build_email_html

load_dotenv()


def get_top_by_category(articles, category):
    if category != "youtube":
        return [a for a in articles if a.get("category") == category][:2]

    channel_map = {}

    for article in articles:
        if article.get("category") != "youtube":
            continue

        channel = article.get("channel")

        if channel not in channel_map:
            channel_map[channel] = article

    return list(channel_map.values())


def send_email():

    articles = rank_articles()

    politics = get_top_by_category(articles, "politics")
    sports = get_top_by_category(articles, "sports")
    ai = get_top_by_category(articles, "ai")
    youtube = get_top_by_category(articles, "youtube")

    stats = {
        "articles": len(articles),
        "summaries": len(
            [a for a in articles if a.get("summary_ai")]
        ),
        "videos": len(youtube),
    }

    html = build_email_html(
        politics,
        sports,
        ai,
        youtube,
        stats,
    )

    EMAIL_USER = os.getenv("EMAIL_USER")
    EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
    EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")

    if not EMAIL_USER or not EMAIL_PASSWORD or not EMAIL_RECEIVER:
        print("❌ Missing email environment variables")
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "📰 NewsNaut | Daily News Digest"
    msg["From"] = EMAIL_USER
    msg["To"] = EMAIL_RECEIVER

    msg.attach(MIMEText(html, "html"))

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.send_message(msg)

        print("✅ HTML email sent successfully")

    except Exception as e:
        print("❌ Email error:", e)