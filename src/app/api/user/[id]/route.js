import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import User from "@/models/user";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const UserEncontrado = await User.findOne({ _id: params.id });
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
    const UsuarioActualizado = await User.findOneAndUpdate(
      { _id: params.id },
      data,
      {
        new: true,
      }
    );
    return NextResponse.json(UsuarioActualizado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const UsuarioEliminado = await User.findByIdAndDelete(params.id);
    if (!UsuarioEliminado) {
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "El Usuario se ha eliminado con éxito",
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
