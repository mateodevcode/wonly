import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Serie from "@/models/serie";


export async function GET() {
    await connectMongoDB();
    const series = await Serie.find({});
    return NextResponse.json(series);
}


export async function POST(request) {
    const { titulo, imagen_fondo, imagen_perfil, id, descripcion, year, generos, publico, temporadas, keyFiltrar } = await request.json();
    await connectMongoDB();
    await Serie.create({ titulo, imagen_fondo, imagen_perfil, id, descripcion, year, generos, publico, temporadas, keyFiltrar });
    return NextResponse.json({message: "Serie creada"}, {status: 201});
  }