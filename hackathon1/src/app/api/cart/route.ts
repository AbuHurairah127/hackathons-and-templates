import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";
import { InferModel, eq } from "drizzle-orm";

const cart = pgTable("cart", {
  _id: serial("_id").primaryKey(),
  product_id: text("product_id").notNull(),
  size: text("size").notNull(),
  user_id: text("user_id").notNull(),
  quantity: integer("quantity").notNull(),
});
type Cart = InferModel<typeof cart, "select">;
type NewCartProduct = InferModel<typeof cart, "insert">;
// type UpdatedCartProduct = InferModel<typeof cart, "">;

export const POST = async (request: NextRequest) => {
  try {
    const db = drizzle(sql);
    const resp = await db
      .insert(cart)
      .values({
        product_id: "lorem_id",
        user_id: "person_id",
        size: "xl",
        quantity: 3,
      })
      .returning();
    return NextResponse.json({ status: 200, data: resp });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};
export const PATCH = async (request: NextRequest) => {
  try {
    const db = drizzle(sql);
    const resp = await db
      .update(cart)
      .set({ quantity: 300 })
      .where(eq(cart._id, 1))
      .returning();
    return NextResponse.json({ status: 200, data: resp });
  } catch (error) {
    console.log("🚀 ~ file: route.ts:39 ~ PUT ~ error:", error);
    return NextResponse.json({ status: 500, error: error });
  }
};
export const DELETE = async (request: NextRequest) => {
  try {
    const db = drizzle(sql);
    const resp = await db.delete(cart).where(eq(cart._id, 1));
    return NextResponse.json({
      status: 200,
      data: "Successfully deleted a product from cart!",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, error: error });
  }
};
