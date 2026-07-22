# ====================================================
# STEP 42A: REUSABLE PREDICTION FUNCTION (From Jupyter Notebook)
# ====================================================
# This function performs the complete machine learning
# prediction pipeline for a single message.
# ====================================================

import pandas as pd
from services.preprocessing import clean_text
from services.model_loader import best_model
from services.model_loader import vectorizer

def predict_message(message):
    """
    Predict the scam category of a message using the
    trained Logistic Regression model.
    """

    # Clean message
    cleaned = clean_text(message)

    # Convert to TF-IDF vector
    vector = vectorizer.transform([cleaned])

    # Predict scam category
    prediction = best_model.predict(vector)[0]

    # Predict probabilities
    probabilities = best_model.predict_proba(vector)[0]

    # Highest confidence score
    confidence = max(probabilities)

    # Create confidence score table
    results_df = pd.DataFrame({

        "Scam Type": best_model.classes_,

        "Confidence Score (%)": probabilities * 100
    })

    results_df = results_df.sort_values(
        by="Confidence Score (%)",
        ascending=False
    )

    results_df["Confidence Score (%)"] = (
        results_df["Confidence Score (%)"]
        .round(4)
    )

    results_df = results_df.reset_index(
        drop=True
    )

    results_df.insert(
        0,
        "Rank",
        range(1, len(results_df) + 1)
    )

    return (
        prediction,
        confidence,
        probabilities,
        vector,
        results_df
    )