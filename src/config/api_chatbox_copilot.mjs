import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();  

const ai = new GoogleGenAI({ apiKey: process.env.KEY_CHATBOX });

const test_ai = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Bạn là phiên bản thứ mấy của Gemini?",
    });
    console.log(response.text);
  }
  catch (error) {
    console.error("Error generating content:", error);
  }
};

export { test_ai };