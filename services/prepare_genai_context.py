# ====================================================
# STEP 42E: REUSABLE GENERATIVE AI CONTEXT FUNCTION
# ====================================================
# This function prepares the machine learning
# prediction results before they are sent to the
# Generative AI component.
# ====================================================

def prepare_genai_context(
    prediction,
    confidence,
    top_keywords,
    message
):

    # Convert confidence score into percentage
    confidence_score = round(
        confidence * 100,
        2
    )

    # Retrieve top contributing keywords
    keyword_list = (
        top_keywords["Keyword"]
        .tolist()
    )

    # Create Generative AI context
    genai_context = {

        "Predicted Scam Type": prediction,

        "Confidence Score (%)": confidence_score,

        "Top Contributing Keywords": keyword_list,

        "Original Message": message.strip()

    }

    return genai_context