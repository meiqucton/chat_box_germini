const api_chatbox_copilot = require('../config/api_chatbox_copilot.mjs');

const AI_Chat_BOX = async (JsonData,request_User) => {
    try{
        const response = await api_chatbox_copilot.ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `từ cái data ${JsonData} dựa vào yêu cầu của khách hàng [${request_User}], chỉ trả lời những cái cần thiết ko cần phải show ra những cái db khác, chỉ trả lời những cái cần thiết thôi nhé`,
          });
          
          return response;
    }catch (error) {
        console.error("Error generating content:", error);
    }
}


module.exports = {
    AI_Chat_BOX,
}