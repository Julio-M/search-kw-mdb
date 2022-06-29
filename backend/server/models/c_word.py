from pydantic import BaseModel, Field

class WordSchema(BaseModel):
   description: str = Field(...)

   class Config:
        schema_extra = {
            "example": {
                "description": """This role includes coding, testing, and supporting the services as well as working with other IBM service teams to provide deeper integration and consistent platform experience. We are looking for motivated candidates willing to get started right away! You will get to interact with cutting edge technology (including Kubernetes, 
                
                Cloud Object Storage, etc.) and be on a team responsible for IBM's strategic logging and monitoring cloud solution. The candidate will have the opportunity to solve complex distributed system and networking problems for services that are revolutionizing the way organizations manage their applications and IT infrastructure.""",
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