# ====================================================
# STEP 42I: REUSABLE PROMPT BUILDER FUNCTION
# ====================================================
# This function constructs a dynamic prompt
# for the Gemini API using the machine
# learning prediction, Explainable AI results
# and retrieved scam knowledge.
# ====================================================

def build_prompt(
    genai_context,
    retrieved_knowledge
):

    # Retrieve predicted scam type
    prediction = genai_context["Predicted Scam Type"]

    # Scam-specific guidelines
    scam_guidelines = {

        "Banking Scam":
            "Focus on fake banking websites, account suspension, OTP theft, login credential theft and financial fraud.",

        "E-commerce Scam":
            "Focus on fake online purchases, fake sellers, non-delivery scams and suspicious payment requests.",

        "General Scam":
            "Focus on common scam tactics, urgency, suspicious requests and social engineering techniques.",

        "Government Scam":
            "Focus on impersonation of government agencies, fake legal threats, Singpass, CPF, IRAS and SPF scams.",

        "Investment Scam":
            "Focus on unrealistic investment returns, cryptocurrency scams, guaranteed profits and financial manipulation.",

        "Job Scam":
            "Focus on fake recruitment, unrealistic salaries, remote work scams and requests for upfront payments.",

        "Legitimate":
            "Explain why the message appears legitimate while encouraging users to remain cautious of future scams.",

        "Loan Scam":
            "Focus on illegal money lending, guaranteed loan approvals, upfront fees and suspicious financial requests.",

        "Lottery Scam":
            "Focus on fake lottery winnings, prize claims, processing fees and requests for personal information.",

        "Parcel Scam":
            "Focus on fake parcel delivery notifications, customs fees, tracking scams and phishing links.",

        "Romance Scam":
            "Focus on emotional manipulation, requests for money, fake online relationships and trust exploitation.",

        "Subscription Scam":
            "Focus on fake subscription renewals, billing scams and payment verification scams."

    }

    # Retrieve scam-specific guideline
    guideline = scam_guidelines.get(
        prediction,
        "Provide a general scam explanation."
    )

    # Construct prompt
    prompt = f"""
You are ScamSense AI, an intelligent scam advisory assistant.

A supervised Logistic Regression model has ALREADY analysed the user's message and predicted the scam category.

Do NOT change, override or reclassify the machine learning prediction.

Instead, your responsibility is to explain the prediction in a clear and user-friendly manner by combining:

1. Machine Learning prediction
2. Explainable AI keywords
3. Retrieved scam knowledge (RAG)
4. Scam-specific guideline
5. Original user message

The retrieved scam knowledge should be treated as the PRIMARY factual reference.

Do NOT simply copy the retrieved knowledge verbatim.

Instead:

- Analyse the original message.
- Explain why it matches the predicted scam category.
- Use the retrieved knowledge to support your explanation.
- Personalise the explanation according to the user's message.
- Expand on the retrieved knowledge where appropriate.
- Do not contradict either the machine learning prediction or the retrieved knowledge.

==================================================
MACHINE LEARNING RESULTS
==================================================

Predicted Scam Category:
{genai_context["Predicted Scam Type"]}

Prediction Confidence:
{genai_context["Confidence Score (%)"]}%

Top Contributing Keywords:
{", ".join(genai_context["Top Contributing Keywords"])}

==================================================
RETRIEVED SCAM KNOWLEDGE (LIGHTWEIGHT RAG)
==================================================

{retrieved_knowledge}

==================================================
SCAM-SPECIFIC GUIDELINE
==================================================

{guideline}

==================================================
ORIGINAL USER MESSAGE
==================================================

{genai_context["Original Message"]}

==================================================
OUTPUT REQUIREMENTS
==================================================

Generate your response as VALID JSON only.

Return exactly the following structure:

{{
    "predicted_scam_type": "",
    "confidence_score": "",
    "risk_level": "",
    "summary": "",
    "why_suspicious": "",
    "scam_indicators": [
        "",
        "",
        ""
    ],
    "safety_advice": [
        "",
        "",
        ""
    ],
    "recommended_actions": [
        "",
        "",
        ""
    ],
    "prevention_tips": [
        "",
        "",
        ""
    ]
}}

Rules:

- Return JSON only.
- Do not use Markdown.
- Do not use code blocks.
- Do not change the predicted scam category.
- Keep the explanation concise and easy for non-technical users to understand.
- Base your explanation primarily on the retrieved scam knowledge while tailoring it to the original message.
"""

    return prompt