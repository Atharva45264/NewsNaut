from datetime import datetime
from pydantic import BaseModel


class Bookmark(BaseModel):
    userId: str

    title: str
    link: str

    image: str | None = None

    summary_ai: str | None = None

    source: str
    category: str

    published_at: str | None = None

    createdAt: datetime = datetime.utcnow()