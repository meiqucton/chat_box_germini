import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();  

const ai = new GoogleGenAI({ apiKey: process.env.KEY_CHATBOX });

export { ai };