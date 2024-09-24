import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Slider from "@/models/slider";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const SliderEncontrado = await Slider.findOne({ "_id": params.id });
    if (!SliderEncontrado)
      return NextResponse.json(
        {
          message: "Slider no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(SliderEncontrado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const SliderActualizado = await Slider.findOneAndUpdate({"_id": params.id}, data, {
      new: true,
    });
    return NextResponse.json(SliderActualizado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const SliderEliminada = await Slider.findByIdAndDelete(params.id);
    if (!SliderEliminada) {
      return NextResponse.json({ message: "Slider no encontrada" }, { status: 404 });
    }
    return NextResponse.json({ message: "El Slider se ha eliminado con éxito" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}