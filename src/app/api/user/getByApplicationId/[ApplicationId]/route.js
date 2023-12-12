import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { ApplicationId } = params;
  console.log(ApplicationId);
  const user = [
    {
      name: "sabib",
      stack: "MERN",
    },
  ];
  return NextResponse.json(user);
}
