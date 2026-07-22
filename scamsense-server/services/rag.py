# ====================================================
# STEP 42G: REUSABLE KNOWLEDGE RETRIEVAL FUNCTION
# ====================================================
# This function retrieves the corresponding
# scam knowledge document based on the
# predicted scam category.
# ====================================================

import os

def retrieve_knowledge(prediction):

    # Folder containing the knowledge base
    knowledge_base_folder = "knowledge_base"

    # Map scam category to Markdown file
    knowledge_files = {

        "Banking Scam": "Banking_Scam.md",

        "E-commerce Scam": "E-Commerce_Scam.md",

        "General Scam": "General_Scam.md",

        "Government Scam": "Government_Scam.md",

        "Investment Scam": "Investment_Scam.md",

        "Job Scam": "Job_Scam.md",

        "Legitimate": "Legitimate.md",

        "Loan Scam": "Loan_Scam.md",

        "Lottery Scam": "Lottery_Scam.md",

        "Parcel Scam": "Parcel_Scam.md",

        "Romance Scam": "Romance_Scam.md",

        "Subscription Scam": "Subscription_Scam.md"

    }

    # Retrieve the corresponding knowledge file
    knowledge_filename = knowledge_files.get(prediction)

    # Construct the full file path
    knowledge_path = os.path.join(
        knowledge_base_folder,
        knowledge_filename
    )

    # Read the knowledge document
    with open(
        knowledge_path,
        "r",
        encoding="utf-8"
    ) as file:

        retrieved_knowledge = file.read()

    return (
        retrieved_knowledge,
        knowledge_filename,
        knowledge_base_folder
    )
    