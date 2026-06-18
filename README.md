# NewsNaut - AI Powered News Aggregator & YouTube Tracker

## Overview

NewsNaut is an AI-powered news aggregation platform that collects the latest news from multiple sources, categorizes them into Politics, Sports, and AI/Technology, summarizes them using Large Language Models, tracks selected YouTube channels for new uploads, and delivers a clean daily digest via email.

The system is fully automated using GitHub Actions and stores all processed data in MongoDB.

---

## Features

### News Aggregation

* Fetches latest news from RSS feeds.
* Supports multiple categories:

  * Politics
  * Sports (Cricket & Football)
  * AI & Technology

### AI Summarization

* Uses Groq LLM (Llama 3.1) for generating concise summaries.
* Converts lengthy news articles into readable 3–4 line briefs.
* Generates summaries for YouTube content as well.

### YouTube Tracking

* Tracks predefined YouTube channels.
* Detects latest uploads.
* Extracts metadata.
* Generates AI summaries for uploaded videos.

### Email Digest

* Sends daily news digest automatically.
* Includes:

  * Top Political News
  * Top Sports News
  * Top AI News
  * Latest YouTube Updates

### Automation

* Automated using GitHub Actions.
* Runs daily without requiring a local machine.
* Sends emails even when the developer's laptop is turned off.

### Frontend Dashboard

* Built with Next.js and Tailwind CSS.
* Category-based filtering.
* Modern responsive UI.
* Displays summarized articles and YouTube updates.

---

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Axios
* Framer Motion

### Backend

* FastAPI
* Python

### Database

* MongoDB Atlas

### AI

* Groq API
* Llama 3.1

### Automation

* GitHub Actions

---

## Project Structure

```text
NewsNaut
│
├── backend
│   │
│   ├── app
│   │   │
│   │   ├── database
│   │   │   └── mongo.py
│   │   │
│   │   ├── services
│   │   │   ├── rss_scraper.py
│   │   │   ├── save_articles.py
│   │   │   ├── rank_articles.py
│   │   │   ├── summarize.py
│   │   │   ├── youtube_service.py
│   │   │   ├── email_service.py
│   │   │   └── pipeline.py
│   │   │
│   │   └── main.py
│   │
│   ├── run_pipeline.py
│   └── requirements.txt
│
├── frontend
│   │
│   ├── app
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.tsx
│   │   │   ├── NewsCard.tsx
│   │   │   └── CategoryTabs.tsx
│   │   │
│   │   └── page.tsx
│   │
│   ├── public
│   ├── package.json
│   └── next.config.ts
│
└── .github
    └── workflows
        └── daily.yml
```
---

## Workflow

1. Fetch latest news from RSS feeds.
2. Store news articles in MongoDB.
3. Track configured YouTube channels.
4. Save latest videos.
5. Rank articles by category.
6. Generate AI summaries.
7. Create formatted daily digest.
8. Send email to users.
9. Display data on frontend dashboard.
10. Execute automatically through GitHub Actions.

---

## Future Enhancements

* User authentication.
* Personalized category preferences.
* Multiple subscriber support.
* Trending analysis.
* Mobile application.
* Admin dashboard.
* Recommendation engine.

---

## Author

Atharva Phanse

Atharva College of Engineering
