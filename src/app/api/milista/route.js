import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Milista from "@/models/miLista";

export async function GET() {
  await connectMongoDB();
  const miLista = await Milista.find({});
  return NextResponse.json(miLista);
}

export async function POST(request) {
  const { id } = await request.json();
  await connectMongoDB();
  await Milista.create({ id });
  return NextResponse.json({ message: "Item agregado a la lista correctamente" }, { status: 201 });
}
