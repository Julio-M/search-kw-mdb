from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    retrieve_frameworks,
    retrieve_framework,
    add_framework,
)
from server.models.w_framework import (
    ErrorResponseModel,
    ResponseModel,
    WebFrameworkSchema,
)

router = APIRouter()

@router.post("/", response_description="Framework data added into the database")
async def add_framework_data(l: WebFrameworkSchema = Body(...)):
    framework = jsonable_encoder(l)
    if framework['name']=='':
          return ResponseModel('Error',"Can't have empty framework")
    new_framework = await add_framework(framework)
    return ResponseModel(new_framework, "Framework added successfully.")

@router.get("/", response_description="Frameworks retrieved")
async def get_frameworks():
    frameworks = await retrieve_frameworks()
    if frameworks:
        return ResponseModel(frameworks, "Framework data retrieved successfully")
    return ResponseModel(frameworks, "Empty list returned")

@router.get("/{id}", response_description="Framework retrieved")
async def get_framework(id: str):
    framework = await retrieve_framework(id)
    if framework:
        return ResponseModel(framework, f"Framework {framework['name']} retrieved successfully")
    return ResponseModel(framework, f"Empty list returned")