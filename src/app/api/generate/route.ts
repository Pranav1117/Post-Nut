import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const a = await req.json()
  return Response.json({
    msg: a,
  });
}
