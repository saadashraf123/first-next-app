import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userId } = params;
  const user = [
    {
      name: "sabib",
      stack: "MERN",
      userId,
    },
  ];
  return NextResponse.json(user);
}
