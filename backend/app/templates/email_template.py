from datetime import datetime


def get_card(article, accent_color="#2563eb", button_text="Read More"):
    """
    Generate an HTML card for a single article.
    """

    if not article:
        return ""

    title = article.get("title", "No Title")
    summary = article.get("summary_ai", "No summary available.")
    url = article.get("url", "#")

    return f"""
    <div style="
        background:#1e293b;
        border-left:6px solid {accent_color};
        border-radius:12px;
        padding:18px;
        margin-bottom:18px;
    ">
        <h3 style="
            color:white;
            margin:0 0 10px;
            font-size:18px;
            font-family:Arial,sans-serif;
        ">
            📰 {title}
        </h3>

        <p style="
            color:#cbd5e1;
            line-height:1.6;
            font-size:14px;
            margin-bottom:18px;
            font-family:Arial,sans-serif;
        ">
            {summary}
        </p>

        <a href="{url}"
           style="
                background:{accent_color};
                color:white;
                text-decoration:none;
                padding:10px 18px;
                border-radius:8px;
                display:inline-block;
                font-family:Arial,sans-serif;
                font-size:14px;
                font-weight:bold;
           ">
            🔗 {button_text}
        </a>
    </div>
    """


def get_section(title, emoji, articles, color, button_text="Read More"):
    """
    Build one email section.
    """

    html = f"""
    <h2 style="
        color:{color};
        font-family:Arial,sans-serif;
        margin-top:35px;
        margin-bottom:20px;
    ">
        {emoji} {title}
    </h2>
    """

    if not articles:
        html += """
        <div style="
            background:#1e293b;
            padding:20px;
            border-radius:10px;
            color:#cbd5e1;
            font-family:Arial,sans-serif;
        ">
            No major updates today.
        </div>
        """
        return html

    for article in articles:
        html += get_card(article, color, button_text)

    return html


def build_email_html(
    politics,
    sports,
    ai,
    youtube,
    stats,
):
    """
    Build complete HTML email.
    """

    today = datetime.now().strftime("%d %B %Y")

    html = f"""
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>NewsNaut Daily Digest</title>

</head>

<body style="
    margin:0;
    padding:40px;
    background:#0f172a;
">

<div style="
    max-width:900px;
    margin:auto;
    background:#111827;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,.35);
">

<!-- ================= HEADER ================= -->

<div style="
    background:linear-gradient(135deg,#2563eb,#7c3aed);
    padding:45px;
    text-align:center;
">

<h1 style="
    color:white;
    margin:0;
    font-size:42px;
    font-family:Arial,sans-serif;
">
📰 NewsNaut
</h1>

<p style="
    color:white;
    opacity:.95;
    margin-top:15px;
    font-size:18px;
    font-family:Arial,sans-serif;
">
Your AI Powered Daily Intelligence Hub
</p>

<p style="
    color:white;
    margin-top:8px;
    font-size:14px;
    font-family:Arial,sans-serif;
">
📅 {today}
</p>

</div>

<!-- ================= CONTENT ================= -->

<div style="padding:40px;">

<h2 style="
    color:white;
    font-family:Arial,sans-serif;
    margin-top:0;
">
🚀 Today's Highlights
</h2>

<p style="
    color:#cbd5e1;
    line-height:1.8;
    font-family:Arial,sans-serif;
">
Here are today's most important updates from Politics,
Sports, AI & Technology, and your favorite YouTube channels,
summarized using Google Gemini.
</p>
    """

    # ================= POLITICS =================

    html += get_section(
        title="Politics",
        emoji="🏛️",
        articles=politics,
        color="#ef4444",
        button_text="Read Full Article",
    )

    # ================= SPORTS =================

    html += get_section(
        title="Sports",
        emoji="⚽",
        articles=sports,
        color="#22c55e",
        button_text="Read Full Article",
    )

    # ================= AI =================

    html += get_section(
        title="AI & Technology",
        emoji="🤖",
        articles=ai,
        color="#3b82f6",
        button_text="Read Full Article",
    )

    # ================= YOUTUBE =================

    html += get_section(
        title="Latest YouTube Videos",
        emoji="🎥",
        articles=youtube,
        color="#a855f7",
        button_text="Watch on YouTube",
    )

    # ================= STATISTICS =================

    html += f"""
    <h2 style="
        color:white;
        font-family:Arial,sans-serif;
        margin-top:45px;
        margin-bottom:20px;
    ">
        📊 Today's Statistics
    </h2>

    <table width="100%" cellpadding="12" cellspacing="10">
        <tr>

            <td align="center"
                style="
                    background:#1e293b;
                    border-radius:12px;
                ">

                <div style="
                    color:#60a5fa;
                    font-size:32px;
                    font-weight:bold;
                    font-family:Arial,sans-serif;
                ">
                    📰
                </div>

                <div style="
                    color:white;
                    font-size:26px;
                    font-weight:bold;
                    font-family:Arial,sans-serif;
                ">
                    {stats.get("articles", 0)}
                </div>

                <div style="
                    color:#cbd5e1;
                    font-family:Arial,sans-serif;
                ">
                    Articles
                </div>

            </td>

            <td align="center"
                style="
                    background:#1e293b;
                    border-radius:12px;
                ">

                <div style="
                    color:#22c55e;
                    font-size:32px;
                    font-weight:bold;
                    font-family:Arial,sans-serif;
                ">
                    🤖
                </div>

                <div style="
                    color:white;
                    font-size:26px;
                    font-weight:bold;
                    font-family:Arial,sans-serif;
                ">
                    {stats.get("summaries", 0)}
                </div>

                <div style="
                    color:#cbd5e1;
                    font-family:Arial,sans-serif;
                ">
                    AI Summaries
                </div>

            </td>

            <td align="center"
                style="
                    background:#1e293b;
                    border-radius:12px;
                ">

                <div style="
                    color:#f97316;
                    font-size:32px;
                    font-weight:bold;
                    font-family:Arial,sans-serif;
                ">
                    🎥
                </div>

                <div style="
                    color:white;
                    font-size:26px;
                    font-weight:bold;
                    font-family:Arial,sans-serif;
                ">
                    {stats.get("videos", 0)}
                </div>

                <div style="
                    color:#cbd5e1;
                    font-family:Arial,sans-serif;
                ">
                    Videos
                </div>

            </td>

        </tr>
    </table>
    """
        # ================= FOOTER =================

    html += """
    <div style="
        margin-top:50px;
        padding:30px;
        background:#0f172a;
        border-top:1px solid #334155;
        text-align:center;
        border-radius:12px;
    ">

        <h2 style="
            color:#60a5fa;
            margin:0;
            font-family:Arial,sans-serif;
        ">
            📰 NewsNaut
        </h2>

        <p style="
            color:#cbd5e1;
            margin-top:12px;
            line-height:1.8;
            font-family:Arial,sans-serif;
        ">
            Thank you for reading today's AI-powered news digest.
            <br><br>
            Stay informed with the latest updates from Politics,
            Sports, AI & Technology, and YouTube—all summarized by
            Google Gemini.
        </p>

        <div style="
            margin-top:25px;
            padding-top:20px;
            border-top:1px solid #334155;
        ">

            <p style="
                color:#94a3b8;
                font-size:13px;
                margin:0;
                font-family:Arial,sans-serif;
            ">
                Made with ❤️ using FastAPI • MongoDB • Gemini • Next.js
            </p>

            <p style="
                color:#64748b;
                font-size:12px;
                margin-top:10px;
                font-family:Arial,sans-serif;
            ">
                © NewsNaut • AI Powered News Aggregator
            </p>

        </div>

    </div>

</div>

</body>
</html>
"""

    return html