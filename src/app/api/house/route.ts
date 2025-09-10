// app/api/house/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get("https://68be7df8227c48698f87058f.mockapi.io/house");
    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch houses" }, { status: 500 });
  }
}
