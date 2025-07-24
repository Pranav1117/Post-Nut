import axios from "axios";

const GEMINI_KEY = process.env.GEMINI_KEY;
const IDENTIFY_GENRE_PROMPT = process.env.IDENTIFY_GENRE_PROMPT;

export const identifyPostGenre = async (userInput: string) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;
  // const url = `http://localhost:3001/dummyres/`;
  const payload = {
    contents: [
      {
        parts: [{ text: `${IDENTIFY_GENRE_PROMPT} ${userInput}` }],
      },
    ],
  };
  try {
    const initialResponse = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const response = await initialResponse.json();
    return initialResponse.data;
  } catch (error) {
    console.log("error", error);
  }
};
