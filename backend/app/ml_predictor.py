import joblib
import pandas as pd
from pathlib import Path

MODEL_PATH = Path(__file__).resolve().parent / "machine_learning" / "models" / "5k_to_1600_model.pkl"
model_5k_to_1600 = joblib.load(MODEL_PATH)

def predict_1600_from_5k(fivek_seconds):
    input_df = pd.DataFrame({"5k_seconds": [fivek_seconds]})
    prediction = model_5k_to_1600.predict(input_df)
    return float(prediction[0])