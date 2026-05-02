from fastapi import FastAPI
from app.scrapers.rss_scraper import fetch_news
from app.services.save_articles import save_articles
from app.services.get_articles import get_articles
from fastapi.middleware.cors import CORSMiddleware

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

from app.services.pipeline import run_pipeline

@app.get("/run-daily")
def run():
    run_pipeline()
    return {"message": "Pipeline executed"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)