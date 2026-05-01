import smtplib
from email.mime.text import MIMEText
from app.services.rank_articles import rank_articles
import os
from dotenv import load_dotenv

load_dotenv()


# 🔥 Get top 2 VALID articles per category
def get_top_by_category(articles, category):
    if category != "youtube":
        result = [a for a in articles if a.get("category") == category]
        return result[:2]

    # 🔥 SPECIAL LOGIC FOR YOUTUBE
    channel_map = {}

    for a in articles:
        if a.get("category") == "youtube":
            channel = a.get("channel")

            if channel not in channel_map:
                channel_map[channel] = a  # take latest per channel

    return list(channel_map.values())

# 🔥 Format each section cleanly
def format_section(title, articles):
    section = f"{title}\n\n"

    if not articles:
        section += "No major updates today.\n\n"
        return section

    for a in articles:
        section += f"📰 {a.get('title', 'No Title')}\n"

        summary = a.get("summary_ai", "").strip()

        if summary:
            section += f"{summary}\n\n"
        else:
            continue  # skip bad data

    return section


def send_email():
    articles = rank_articles()

    # 🔥 Get filtered + summarized articles only
    politics = get_top_by_category(articles, "politics")
    sports = get_top_by_category(articles, "sports")
    ai = get_top_by_category(articles, "ai")
    youtube = get_top_by_category(articles, "youtube")

    # 🔥 Build content
    content = "📬 DAILY NEWS DIGEST\n"
    content += "====================================\n\n"

    content += format_section("🏛️ POLITICS", politics)
    content += "------------------------------------\n\n"

    content += format_section("⚽ SPORTS (Cricket & Football)", sports)
    content += "------------------------------------\n\n"

    content += format_section("🤖 AI & TECHNOLOGY", ai)

    content += "------------------------------------\n\n"
    content += format_section("🎥 YOUTUBE UPDATES", youtube)

    # 🔥 Email setup (SAFE: use env variables)
    msg = MIMEText(content)
    msg["Subject"] = "Daily News Digest"
    msg["From"] = os.getenv("EMAIL_USER")
    msg["To"] = os.getenv("EMAIL_RECEIVER")

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()

        server.login(
            os.getenv("EMAIL_USER"),
            os.getenv("EMAIL_PASS")
        )

        server.send_message(msg)
        server.quit()

        print("Email sent successfully")

    except Exception as e:
        print("Email error:", e)