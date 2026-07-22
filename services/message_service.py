# ====================================================
# STEP 43A: SINGLE MESSAGE DETECTION SERVICE
# ====================================================
# Execute the complete ScamSense detection
# pipeline for a single user message.
# ====================================================

from services.prediction import predict_message
from services.explainability import explain_prediction
from services.rag import retrieve_knowledge
from services.prepare_genai_context import prepare_genai_context
from services.prompt_builder import build_prompt
from services.gemini_service import generate_ai_report

def analyze_single_message(message):

    # ---------------------------------------------
    # Machine Learning Prediction
    # ---------------------------------------------
    (
        prediction,
        confidence,
        probabilities,
        vector,
        results_df
    ) = predict_message(message)

    # ---------------------------------------------
    # Explainable AI
    # ---------------------------------------------
    top_keywords = explain_prediction(
        prediction,
        confidence,
        vector
    )

    # ---------------------------------------------
    # Prepare Generative AI Context
    # ---------------------------------------------
    genai_context = prepare_genai_context(
        prediction,
        confidence,
        top_keywords,
        message
    )

    # ---------------------------------------------
    # Retrieve Scam Knowledge (RAG)
    # ---------------------------------------------
    (
        retrieved_knowledge,
        knowledge_filename,
        knowledge_base_folder
    ) = retrieve_knowledge(prediction)

    # ---------------------------------------------
    # Build Gemini Prompt
    # ---------------------------------------------
    prompt = build_prompt(
        genai_context,
        retrieved_knowledge
    )

    # ---------------------------------------------
    # Generate AI Report
    # ---------------------------------------------
    ai_result = generate_ai_report(prompt)

    return ai_result