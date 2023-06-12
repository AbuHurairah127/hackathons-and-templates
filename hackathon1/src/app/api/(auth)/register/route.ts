import { db, sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  email: text("email"),
  password: text("password"),
});
export async function GET() {
  try {
    const db = drizzle(sql);
    const result = await db
      .insert(users)
      .values({
        name: "Abu Hurairah",
        email: "test@exp.com",
        password: "password",
      })
      .returning({ insertedId: users.id, name: users.name });
    return NextResponse.json({ result });
  } catch (error) {
    console.log(error);
  }
}
