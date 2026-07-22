import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_BASE_URL

});


/* ==========================================
   Analyze Single Message
========================================== */

export const analyzeMessage = async (message) => {

    const response = await api.post(

        "/api/message/analyze-message",

        {

            message

        }

    );

    return response.data;

};


/* ==========================================
   Analyze Excel Dataset
========================================== */

export const analyzeDataset = async (file) => {

    const formData = new FormData();

    formData.append(
        "file",
        file
    );

    const response = await api.post(

        "/api/batch/analyze-dataset",

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

    return response.data;

};

export const downloadDataset = async (filename) => {

    const response = await api.get(

        `/api/batch/download/${filename}`,

        {

            responseType: "blob"

        }

    );

    return response;

};

export default api;