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

async def word_handler(r,type):
    text = jsonable_encoder(r)
    if text['description']=='':
          return ResponseModel('Error',"Can't have empty text")
    type = type
    new_des = await words(text['description'],type)
    return new_des




@router.post("/", response_description="Sent data")
async def description_data(l: WordSchema = Body(...)):
   type='All'
   res = await word_handler(l,type)
   return res

@router.post("/p_languages",response_description="Sent data")
async def p_description_data(l: WordSchema = Body(...)):
  type='Languages'
  res = await word_handler(l,type)
  return res

  