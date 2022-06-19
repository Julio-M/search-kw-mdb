import motor.motor_asyncio
from bson.objectid import ObjectId
import os
from dotenv import load_dotenv

load_dotenv()

username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")

MONGO_DETAILS = f"mongodb+srv://{username}:{password}@cluster0.qk8xk.mongodb.net/?retryWrites=true&w=majority"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.kwsearch

languages_collection = database.get_collection("P-Tools")

def language_helper(language) -> dict:
    return {
        "id": str(language["_id"]),
        "language": language["language"],
        "source": language["source"],
    }

# Retrieve all languages present in the database
async def retrieve_languages():
    languages = []
    async for language in languages_collection.find():
        languages.append(language_helper(language))
    return languages


# Retrieve a lanugage with a matching ID
async def retrieve_language(id: str) -> dict:
    language = await languages_collection.find_one({"_id": ObjectId(id)})
    if language:
        return language_helper(language)

# Add a new language into to the database
async def add_language(language_data: dict) -> dict:
    language = await languages_collection.insert_one(language_data)
    new_language = await languages_collection.find_one({"_id": language.inserted_id})
    return language_helper(new_language)

