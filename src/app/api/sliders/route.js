import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Slider from "@/models/slider";


export async function GET() {
    await connectMongoDB();
    const Sliders = await Slider.find({});
    return NextResponse.json(Sliders);
}


export async function POST(request) {
    const { id, titulo, url, cards } = await request.json();
    await connectMongoDB();
    await Slider.create({ id, titulo, url, cards });
    return NextResponse.json({message: "Slider creado"}, {status: 201});
  }