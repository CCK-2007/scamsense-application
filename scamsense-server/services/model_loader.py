import joblib

best_model = joblib.load(
    "models/scam_detector.pkl"
)

vectorizer = joblib.load(
    "models/tfidf_vectorizer.pkl"
)