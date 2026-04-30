from pymongo import MongoClient # type: ignore
import os
from dotenv import load_dotenv
import certifi

load_dotenv()

client = MongoClient(
    os.getenv("MONGO_URL"),
    tlsCAFile=certifi.where()
)

db = client[os.getenv("DB_NAME")]
articles_collection = db["articles"]