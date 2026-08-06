import os
import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from dotenv import load_dotenv

from app.database.mongo import youtube_collection
from app.services.rank_articles import rank_articles
from app.templates.email_template import build_email_html

load_dotenv()


def get_top_by_category(articles, category):
    return [
        article
        for article in articles
        if article.get("category") == category
    ][:2]


def send_email():

    print("\n📨 Building Daily AI Digest...\n")

    articles = rank_articles()

    politics = get_top_by_category(
        articles,
        "politics",
    )

    sports = get_top_by_category(
        articles,
        "sports",
    )

    ai = get_top_by_category(
        articles,
        "ai",
    )

    # Latest tracked YouTube channels
    youtube = list(
        youtube_collection.find()
    )

    stats = {
        "articles": len(articles),
        "summaries": len(
            [
                article
                for article in articles
                if article.get("summary_ai")
            ]
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

    if not (
        EMAIL_USER
        and EMAIL_PASSWORD
        and EMAIL_RECEIVER
    ):
        print("❌ Missing email environment variables.")
        return

    message = MIMEMultipart("alternative")

    message["Subject"] = "📰 NewsNaut | Daily AI Digest"

    message["From"] = EMAIL_USER

    message["To"] = EMAIL_RECEIVER

    message.attach(
        MIMEText(
            html,
            "html",
        )
    )

    try:

        with smtplib.SMTP(
            "smtp.gmail.com",
            587,
        ) as server:

            server.starttls()

            server.login(
                EMAIL_USER,
                EMAIL_PASSWORD,
            )

            server.send_message(message)

        print("✅ Daily digest sent successfully.")

    except Exception as e:

        print("❌ Failed to send email.")

        print(e)