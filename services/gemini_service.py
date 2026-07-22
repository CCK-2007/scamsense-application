# ====================================================
# STEP 42K: REUSABLE AI REPORT GENERATION FUNCTION
# ====================================================
# Submit the constructed prompt to Google's
# Gemini API and return the structured JSON response.
# ====================================================

# ====================================================
# GEMINI SERVICE
# ====================================================
# Submit prompts to Google's Gemini model and
# return a structured JSON response.
# ====================================================

import os
import json

from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Create Gemini client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_ai_report(prompt):

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    response_text = response.text

    ai_result = json.loads(response_text)

    return ai_result