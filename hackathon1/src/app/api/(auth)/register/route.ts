import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await db.connect();
    await client.sql`create table lorem(id serial primary key)`;
    return NextResponse.json("TAble created");
  } catch (error) {
    console.log(error);
  }
}
