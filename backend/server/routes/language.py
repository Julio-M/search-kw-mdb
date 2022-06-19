from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    retrieve_languages,
    retrieve_language,
    add_language,
)
from server.models.p_language import (
    ErrorResponseModel,
    ResponseModel,
    LanguageSchema,
)

router = APIRouter()

@router.post("/", response_description="Language data added into the database")
async def add_language_data(student: LanguageSchema = Body(...)):
    language = jsonable_encoder(student)
    new_student = await add_language(language)
    return ResponseModel(new_student, "Language added successfully.")

@router.get("/", response_description="Languages retrieved")
async def get_languages():
    languages = await retrieve_languages()
    if languages:
        return ResponseModel(languages, "Languages data retrieved successfully")
    return ResponseModel(languages, "Empty list returned")

@router.get("/{id}", response_description="Language retrieved")
async def get_language(id: str):
    language = await retrieve_language(id)
    if language:
        return ResponseModel(language, f"Language {language['language']} retrieved successfully")
    return ResponseModel(language, f"Empty list returned")