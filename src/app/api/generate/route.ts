import { generateTweet } from "@/utils/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const a = await req.json();

  // call gemini with user input and get generated tweet
  const res = await generateTweet(a.input);
  console.log("res", res);
  
  return  Response.json({
    msg: res,
  });
}
