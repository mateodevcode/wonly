import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Milista from "@/models/miLista";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const listaEncontrada = await Milista.findOne({ id: params.id });
    if (!listaEncontrada)
      return NextResponse.json(
        {
          message: "Lista no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(listaEncontrada);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const ListaEliminada = await Milista.findOneAndDelete({id: params.id});
    if (!ListaEliminada) {
      return NextResponse.json(
        { message: "Item en la lista no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "Se ha eliminado con exito el item de la lista",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
