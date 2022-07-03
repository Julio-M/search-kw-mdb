from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
import string
import requests

from server.views.d_arrange import (
    words,
)
from server.models.c_word import (
    ErrorResponseModel,
    ResponseModel,
    WordSchema,
)

router = APIRouter()

@router.post("/", response_description="Sent data")
async def description_data(l: WordSchema = Body(...)):
    text = jsonable_encoder(l)
    if text['description']=='':
          return ResponseModel('Error',"Can't have empty text")
    type ='All'
    new_des = words(text['description'],type)
    return new_des

@router.post("/p_languages",response_description="Sent data")
async def p_description_data(l: WordSchema = Body(...)):
  text = jsonable_encoder(l)
  await words(text['description'],type="languages")
  if text['description']=='':
          return ResponseModel('Error',"Can't have empty text")
  type ='Languages'
  new = await words(text['description'],type)
  return new

  