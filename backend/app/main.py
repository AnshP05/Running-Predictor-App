from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.riegel_predictions import generatePredictions

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
    distance: float

@app.get("/")
def home():
    return {"message": "Test works"}

@app.post("/predict")
def predict(request: PredictionRequest):
    predictions = generatePredictions(request.time, request.distance)
    
    return {
        "receivedTime": request.time,
        "receivedDistance": request.distance,
        "predictions": predictions
    }