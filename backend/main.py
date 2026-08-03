from fastapi import FastAPI
from app.scrapers.rss_scraper import fetch_news
from app.services.save_articles import save_articles
from app.services.get_articles import get_articles
from fastapi.middleware.cors import CORSMiddleware
from app.services.dashboard import dashboard_stats
from app.routes.bookmarks import router as bookmark_router
from app.youtube.routes import router as youtube_router

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI News API running"}

@app.get("/fetch")
def fetch():
    data = fetch_news()
    save_articles(data)
    return {"articles": len(data)}

@app.get("/articles")
def articles():
    return get_articles()

from app.services.summarize import summarize_articles

@app.get("/summarize")
def summarize():
    summarize_articles()
    return {"message": "Summaries generated"}

from app.services.rank_articles import rank_articles

@app.get("/top")
def top_articles():
    return rank_articles()

@app.get("/news/latest")
def latest_news():
    articles = get_articles()
    return articles[:10]


@app.get("/news/trending")
def trending_news():
    return rank_articles()


@app.get("/dashboard/stats")
def stats():
    return dashboard_stats()


@app.get("/summary/today")
def today_summary():
    articles = rank_articles()

    if not articles:
        return {
            "title": "",
            "summary": "",
            "category": "",
            "source": "",
            "published_at": "",
            "link": "",
        }

    article = articles[0]

    return {
        "title": article.get("title"),
        "summary": article.get("summary_ai"),
        "category": article.get("category"),
        "source": article.get("source"),
        "published_at": article.get("published_at"),
        "link": article.get("link"),
    }

from app.services.pipeline import run_pipeline

@app.get("/run-daily")
def run():
    run_pipeline()
    return {"message": "Pipeline executed"}

app.include_router(bookmark_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(youtube_router)