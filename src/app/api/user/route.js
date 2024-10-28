import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import User from "@/models/user";

export async function GET() {
  await connectMongoDB();
  const Usuarios = await User.find({});
  return NextResponse.json(Usuarios);
}

export async function POST(request) {
  const {
    name,
    email,
    password,
    image,
    lista,
    bloqueado
  } = await request.json();
  await connectMongoDB();
  await User.create({
    name,
    email,
    password,
    image,
    lista,
    bloqueado
  });
  return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
}
