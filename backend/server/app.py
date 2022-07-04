from fastapi import FastAPI, Request
from .routes.language import router as LanguageRouter
from .routes.framework import router as FrameworkRouter
from .routes.w_count import router as WordRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), "static")
templates = Jinja2Templates(directory="templates")

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


# @app.get("/", tags=["Root"])
# async def read_root():
#     return {"message": "Welcome"}

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})