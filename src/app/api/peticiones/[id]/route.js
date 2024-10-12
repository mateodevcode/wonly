import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Peticiones from "@/models/peticiones";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const peticionEncontrada = await Peticiones.findOne({ _id: params.id });
    if (!peticionEncontrada)
      return NextResponse.json(
        {
          message: "Petición no encontrada",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(peticionEncontrada);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const peticionEliminada = await Peticiones.findByIdAndDelete(params.id);
    if (!peticionEliminada) {
      return NextResponse.json(
        { message: "Petición no encontrada" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "La Petición se ha eliminado con éxito",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
