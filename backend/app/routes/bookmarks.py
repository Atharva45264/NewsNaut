from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.bookmark_service import (
    add_bookmark,
    remove_bookmark,
    get_bookmarks,
    is_bookmarked,
)

router = APIRouter(prefix="/bookmarks", tags=["Bookmarks"])


class BookmarkRequest(BaseModel):
    userId: str
    link: str


class DeleteBookmarkRequest(BaseModel):
    userId: str
    link: str


@router.post("/")
def create_bookmark(request: BookmarkRequest):
    result = add_bookmark(request.userId, request.link)

    if "error" in result:
        raise HTTPException(status_code=404, detail=result["error"])

    return result


@router.delete("/")
def delete_bookmark(request: DeleteBookmarkRequest):
    return remove_bookmark(request.userId, request.link)


@router.get("/{user_id}")
def fetch_bookmarks(user_id: str):
    return get_bookmarks(user_id)


@router.get("/check/{user_id}")
def check_bookmark(user_id: str, link: str):
    return {
        "isBookmarked": is_bookmarked(user_id, link)
    }