import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";
import { eq, and } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

const cart = pgTable("cart", {
  _id: serial("_id").primaryKey(),
  product_id: text("product_id").notNull(),
  size: text("size").notNull(),
  user_id: text("user_id").notNull(),
  quantity: integer("quantity").notNull(),
});

export const POST = async (request: NextRequest) => {
  try {
    const db = drizzle(sql);
    const req = await request.json();
    const { userId } = auth();
    if (!userId) {
      console.log("err");

      NextResponse.json({
        status: 401,
        error: "You are not logged in.",
      });
      return NextResponse.redirect("/signin");
    }
    const chkData = await db
      .select()
      .from(cart)
      .where(
        and(
          eq(cart.product_id, req.product_id),
          eq(cart.size, req.size),
          eq(cart.user_id, userId)
        )
      );
    if (chkData[0]) {
      return NextResponse.json({
        status: 400,
        data: chkData,
        msg: "The product is already in your cart.",
      });
    }
    const resp = await db
      .insert(cart)
      .values({
        product_id: req.product_id,
        user_id: userId,
        size: req.size,
        quantity: req.quantity,
      })
      .returning();
    return NextResponse.json({ status: 200, data: resp });
  } catch (error) {
    console.log("🚀 ~ file: route.ts:55 ~ POST ~ error:", error);
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

export const GET = async (request: NextRequest) => {
  try {
    const db = drizzle(sql);
    const resp = await db.select().from(cart).where(eq(cart.user_id, ""));
    console.log("🚀 ~ file: route.ts:66 ~ GET ~ resp:", resp);
  } catch (error) {
    return NextResponse.json({ status: 500, error: error });
  }
};
