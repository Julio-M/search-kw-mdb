from fastapi import FastAPI
from server.routes.language import router as LanguageRouter
from server.routes.framework import router as FrameworkRouter

app = FastAPI()

app.include_router(LanguageRouter, tags=["Language"], prefix="/language")
app.include_router(FrameworkRouter, tags=["Framework"], prefix="/framework")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}