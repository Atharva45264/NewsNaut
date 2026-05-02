import smtplib
from email.mime.text import MIMEText
from app.services.rank_articles import rank_articles
import os
from dotenv import load_dotenv

load_dotenv()


# 🔥 Get top articles per category
def get_top_by_category(articles, category):
    if category != "youtube":
        result = [a for a in articles if a.get("category") == category]
        return result[:2]

    # 🔥 1 video per channel
    channel_map = {}

    for a in articles:
        if a.get("category") == "youtube":
            channel = a.get("channel")

            if channel not in channel_map:
                channel_map[channel] = a

    return list(channel_map.values())


# 🔥 Format section
def format_section(title, articles):
    section = f"{title}\n\n"

    if not articles:
        section += "No major updates today.\n\n"
        return section

    for a in articles:
        summary = a.get("summary_ai", "").strip()

        if not summary:
            continue

        section += f"📰 {a.get('title', 'No Title')}\n"
        section += f"{summary}\n\n"

    return section


def send_email():
    articles = rank_articles()

    # 🔥 Categories
    politics = get_top_by_category(articles, "politics")
    sports = get_top_by_category(articles, "sports")
    ai = get_top_by_category(articles, "ai")
    youtube = get_top_by_category(articles, "youtube")

    # 🔥 Email content
    content = "📬 DAILY NEWS DIGEST\n"
    content += "====================================\n\n"

    content += format_section("🏛️ POLITICS", politics)
    content += "------------------------------------\n\n"

    content += format_section("⚽ SPORTS (Cricket & Football)", sports)
    content += "------------------------------------\n\n"

    content += format_section("🤖 AI & TECHNOLOGY", ai)
    content += "------------------------------------\n\n"

    content += format_section("🎥 YOUTUBE UPDATES", youtube)

    # 🔥 ENV VARIABLES
    EMAIL_USER = os.getenv("EMAIL_USER")
    EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
    EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")

    if not EMAIL_USER or not EMAIL_PASSWORD or not EMAIL_RECEIVER:
        print("❌ Missing email environment variables")
        return

    # 🔥 Create email
    msg = MIMEText(content)
    msg["Subject"] = "Daily News Digest"
    msg["From"] = EMAIL_USER
    msg["To"] = EMAIL_RECEIVER

    # 🔥 Send email
    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(EMAIL_USER, EMAIL_PASSWORD)
            server.send_message(msg)

        print("✅ Email sent successfully")

    except Exception as e:
        print("❌ Email error:", e)
