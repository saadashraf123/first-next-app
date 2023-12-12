import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// export async function GET(request) {
//   const data = await prisma.user.findMany();
//   console.log(data);
//   return NextResponse.json(data);
// }

// export const POST = async (request, response) => {
//   const { username, email, firstname, lastname, password } = request.body;
//   const newUser = await prisma.user.create({
//     data: {
//       username: username,
//       email: email,
//       firstname: firstname,
//       lastname: lastname,
//       password: password,
//     },
//   });
//   return NextResponse.json(newUser, {
//     message: "Success",
//   });
// };

// const result = JSON.parse(
//   JSON.stringify(data, (key, value) =>
//     typeof value === "bigint" ? value.toString() : value
//   )
// );

export async function GET(req, res) {
  const result = await prisma.user.findMany();
  return NextResponse.json(result);
}

export async function POST(request, res) {
  const { username, email, firstname, lastname, password } =
    await request.json();
  const data = {
    username,
    email,
    firstname,
    lastname,
    password,
  };
  try {
    const result = await prisma.user.create({ data });
    return NextResponse.json(result, { message: "Successfully Created User" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "User Creation Failed",
      },
      {
        status: 400,
      }
    );
  }
}
