from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.youtube.service import (
    add_channel,
    get_channels,
    remove_channel,
)

from app.youtube.sync import sync_channels

router = APIRouter(
    prefix="/youtube",
    tags=["YouTube Tracker"],
)


class AddChannelRequest(BaseModel):
    userId: str
    url: str


class DeleteChannelRequest(BaseModel):
    userId: str
    url: str


@router.post("/")
def create_channel(request: AddChannelRequest):
    result = add_channel(
        request.userId,
        request.url,
    )

    if "error" in result:
        raise HTTPException(
            status_code=400,
            detail=result["error"],
        )

    return result


@router.get("/sync")
def sync_youtube_channels():
    return sync_channels()


@router.get("/{user_id}")
def fetch_channels(user_id: str):
    return get_channels(user_id)


@router.delete("/")
def delete_channel(request: DeleteChannelRequest):
    return remove_channel(
        request.userId,
        request.url,
    )