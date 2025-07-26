import axios from "axios";

const GEMINI_KEY = process.env.GEMINI_KEY;
const PROMPT = process.env.GENERATE_TWEET_PROMPT;

export const generateTweet = async (userInput: string) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;

  // structure of payload to send to AI model
  const payload = {
    contents: [
      {
        parts: [{ text: `${PROMPT} ${userInput}` }],
      },
    ],
  };

  try {
    const initialResponse = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    // this is structure gemini return response
    // console.log("response from Model", initialResponse.data.candidates[0].content.parts[0].text);
  
    const response = await initialResponse.data.candidates[0].content.parts[0].text;
    const finalRes = await response.replace(/^.*?(?=\n|Wake|I|Let's|Stop|Start)/s, "").trim();

    return finalRes;
  } catch (error) {
    console.log("error", error);
  }
};
