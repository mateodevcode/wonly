import { NextResponse } from "next/server";
import Serie from "@/models/serie";
import { connectMongoDB } from "@/libs/mongoDB";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const UserEncontrado = await Serie.findOne({ "_id": params.id });
    if (!UserEncontrado)
      return NextResponse.json(
        {
          message: "Usuario no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(UserEncontrado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const UsuarioActualizado = await Serie.findOneAndUpdate({"email":params.id}, data, {
      new: true,
    });
    return NextResponse.json(UsuarioActualizado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const UsuarioEliminado = await Serie.findByIdAndDelete(params.id);
    if (!ProductoEliminado)
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(UsuarioEliminado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
