from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PredictionRequest(BaseModel):
    time: str
    distance: str

@app.get("/")
def home():
    return {"message": "Test works"}

@app.post("/predict")
def predict(request: PredictionRequest):
    return {
        "receivedTime": request.time,
        "receivedDistance": request.distance,
        "predictions": [
            {"distance": "800m", "predictedTime": "2:03"},
            {"distance": "1500m", "predictedTime": "4:19"},
            {"distance": "Mile", "predictedTime": "4:32"}
        ]
    }