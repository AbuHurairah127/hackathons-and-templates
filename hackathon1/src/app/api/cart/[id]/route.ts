import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { NextRequest, NextResponse } from "next/server";
import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";

const cart = pgTable("cart", {
  _id: serial("_id").primaryKey(),
  product_id: text("product_id").notNull(),
  size: text("size").notNull(),
  user_id: text("user_id").notNull(),
  quantity: integer("quantity").notNull(),
});
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    console.log(params.id);

    const db = drizzle(sql);
    const resp = await db.delete(cart).where(eq(cart._id, Number(params.id)));
    if (resp.rowCount) {
      return NextResponse.json({
        status: 200,
        data: "Successfully deleted a product from cart!",
      });
    }
    return NextResponse.json({
      status: 200,
      data: "The product is already removed from your cart!",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, error: error });
  }
};
