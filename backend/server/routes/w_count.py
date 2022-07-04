from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
import string
import requests

from ..views.d_arrange import (
    words,
)
from ..models.c_word import (
    ErrorResponseModel,
    ResponseModel,
    WordSchema,
)

router = APIRouter()

async def word_handler(r,type):
    text = jsonable_encoder(r)
    if not text['description']:
          return ErrorResponseModel('Error',422,"Can't have empty text")
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

@router.post("/w_frameworks",response_description="Sent data")
async def p_description_data(l: WordSchema = Body(...)):
  type='Frameworks'
  res = await word_handler(l,type)
  return res

  