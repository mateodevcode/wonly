import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Pelicula from "@/models/pelicula";

export async function GET() {
  await connectMongoDB();
  const series = await Pelicula.find({});
  return NextResponse.json(series);
}

export async function POST(request) {
  const {
    titulo,
    imagen_fondo,
    imagen_perfil,
    id,
    descripcion,
    year,
    generos,
    publico,
    linkTo,
    duracion,
    url,
  } = await request.json();
  await connectMongoDB();
  await Pelicula.create({
    titulo,
    imagen_fondo,
    imagen_perfil,
    id,
    descripcion,
    year,
    generos,
    publico,
    linkTo,
    duracion,
    url,
  });
  return NextResponse.json({ message: "Pelicula creada" }, { status: 201 });
}
