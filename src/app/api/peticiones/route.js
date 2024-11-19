import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Peticiones from "@/models/peticiones";

export async function GET() {
  await connectMongoDB();
  const peticiones = await Peticiones.find({});
  return NextResponse.json(peticiones);
}

export async function POST(request) {
  const { nombre, email, tipo } = await request.json();
  await connectMongoDB();
  await Peticiones.create({ nombre, email, tipo });
  return NextResponse.json({ message: "Petición creada" }, { status: 201 });
}
