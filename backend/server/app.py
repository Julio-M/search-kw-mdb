from fastapi import FastAPI
from server.routes.language import router as LanguageRouter

app = FastAPI()

app.include_router(LanguageRouter, tags=["Language"], prefix="/language")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}