import smtplib
from email.mime.text import MIMEText
from app.services.rank_articles import rank_articles

def send_email():
    articles = rank_articles()

    politics = []
    sports = []
    ai = []

    for a in articles:
        category = a.get("category", "")

        if category == "politics":
            politics.append(a)
        elif category == "sports":
            sports.append(a)
        elif category == "ai":
            ai.append(a)

    content = "📬 DAILY NEWS DIGEST\n\n"

    content += "🏛️ POLITICS\n"
    for a in politics[:3]:
        content += f"{a['title']}\n{a.get('summary_ai','')}\n\n"

    content += "⚽ SPORTS\n"
    for a in sports[:3]:
        content += f"{a['title']}\n{a.get('summary_ai','')}\n\n"

    content += "🤖 AI NEWS\n"
    for a in ai[:3]:
        content += f"{a['title']}\n{a.get('summary_ai','')}\n\n"

    msg = MIMEText(content)

    msg["Subject"] = "Daily AI News Digest"
    msg["From"] = "atharvaphanse403@gmail.com"
    msg["To"] = "sakshiphanse92@gmail.com"

    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()

    server.login("atharvaphanse403@gmail.com", "gdgicuqxrbtbmzxi")

    server.send_message(msg)
    server.quit()