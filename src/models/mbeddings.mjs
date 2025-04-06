import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config(); // Đọc API key từ biến môi trường

const getEmbedding = async (text) => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("API key is missing!");
        return;
    }

    const ai = new GoogleGenAI({ apiKey });

    try {
        const response = await ai.models.embedContent({
            model: 'gemini-embedding-exp-03-07',
            contents: text,
            config: {
                taskType: "SEMANTIC_SIMILARITY",  
            }
        });

        console.log(response.embeddings); 
    } catch (error) {
        console.error("Error fetching embedding:", error);
    }
};

getEmbedding("What is the meaning of life?");

export { getEmbedding };
