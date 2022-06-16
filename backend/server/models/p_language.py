from pydantic import BaseModel, Field

class LanguageSchema(BaseModel):
    language: str = Field(...)
    source: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "language": "python",
                "source": "https://en.wikipedia.org/wiki/python",
            }
        }

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}