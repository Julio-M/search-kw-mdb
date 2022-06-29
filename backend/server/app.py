from fastapi import FastAPI
from server.routes.language import router as LanguageRouter
from server.routes.framework import router as FrameworkRouter
from server.routes.w_count import router as WordRouter
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(LanguageRouter, tags=["Language"], prefix="/language")
app.include_router(FrameworkRouter, tags=["Framework"], prefix="/framework")
app.include_router(WordRouter, tags=["Description"], prefix="/description")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome"}