import connectDB from "@/libs/mongodb";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    await Order.create(body);
    return NextResponse.json({ message: "Order added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const orders = await Order.find();
    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error: ", error }, { status: 500 });
  }
}
