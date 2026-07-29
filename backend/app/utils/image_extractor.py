import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 Chrome/127.0 Safari/537.36"
    )
}

session = requests.Session()
session.headers.update(HEADERS)


def extract_article_image(url: str) -> str:
    try:
        response = session.get(url, timeout=5)

        if response.status_code != 200:
            return ""

        soup = BeautifulSoup(response.text, "lxml")

        # Open Graph image
        og = soup.find("meta", property="og:image")
        if og and og.get("content"):
            return urljoin(url, og["content"])

        # Twitter image
        twitter = soup.find("meta", attrs={"name": "twitter:image"})
        if twitter and twitter.get("content"):
            return urljoin(url, twitter["content"])

        # image_src
        image_src = soup.find("link", rel="image_src")
        if image_src and image_src.get("href"):
            return urljoin(url, image_src["href"])

        # Largest image fallback
        images = soup.find_all("img")

        best = ""

        for img in images:

            src = (
                img.get("src")
                or img.get("data-src")
                or img.get("data-original")
                or ""
            )

            if not src:
                continue

            src = urljoin(url, src)

            bad = [
                "logo",
                "icon",
                "avatar",
                "placeholder",
                "ads",
                "banner",
                "pixel",
            ]

            if any(word in src.lower() for word in bad):
                continue

            width = 0
            height = 0

            try:
                width = int(img.get("width", 0))
                height = int(img.get("height", 0))
            except Exception:
                pass

            if width * height > 40000:
                return src

            if not best:
                best = src

        return best

    except Exception:
        return ""