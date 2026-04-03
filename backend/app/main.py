from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.riegel_predictions import generatePredictions
from app.riegel_predictions import timeToSeconds
from app.ml_predictor import predict_1600_from_5k as fivek_to_1600
from app.riegel_predictions import secondsToTime


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
    
@app.post("/predict-ml")
def predict_ml(request : PredictionRequest): 
    input_seconds = timeToSeconds(request.time)
    
    predicted_1600_seconds = fivek_to_1600(input_seconds)
    
    return {
        "recievedTime":request.time,
        "recievedDistance":request.distance,
        "predictions": [
            {
                "distance":"1600m(or Mile)",
                "predictedTime" : secondsToTime(predicted_1600_seconds)
            }
        ]
    }