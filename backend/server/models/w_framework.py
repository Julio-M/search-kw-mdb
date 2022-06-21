from pydantic import BaseModel, Field

class WebFrameworkSchema(BaseModel):
    name: str = Field(...)
    type: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "Django",
                "type": "Server-side"
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