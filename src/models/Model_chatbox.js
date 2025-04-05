const api_chatbox_copilot = require('../config/api_chatbox_copilot.mjs');

const AI_Chat_BOX = async (request_User) => {
    try{
        const response = await api_chatbox_copilot.ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `${request_User}`,
          });
          return response;
    }catch (error) {
        console.error("Error generating content:", error);
    }
}
module.exports = {
    AI_Chat_BOX,
}