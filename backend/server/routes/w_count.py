from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
import string

from server.views.d_arrange import (
    words
)
from server.models.c_word import (
    ErrorResponseModel,
    ResponseModel,
    WordSchema,
)

router = APIRouter()

@router.post("/", response_description="Sent data")
async def description_data(l: WordSchema = Body(...)):
    framework = jsonable_encoder(l)
    if framework['description']=='':
          return ResponseModel('Error',"Can't have empty framework")
    new_des = words(framework['description'])
    return new_des