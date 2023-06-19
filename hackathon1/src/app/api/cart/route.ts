import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pgTable, integer, text } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const cart = pgTable("cart", {
  product_id: text("product_id").notNull(),
  size: text("size").notNull(),
  user_id: text("user_id").notNull(),
  quantity: integer("quantity").notNull(),
});
type Cart = InferModel<typeof cart, "select">;
type NewCartProduct = InferModel<typeof cart, "insert">;
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
    return NextResponse.json({ data: resp });
  } catch (error) {}
};
