import { cart } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    console.log("🚀 ~ POST ~ body:", body);
    const { userId } = auth();
    if (!userId) return;
    // Insert data into the user_orders table
    const { rows } = await sql`
      INSERT INTO user_orders (
        name, email, contact_no, address, city, province, country, 
        payment_method, transaction_screenshot_path, status, user_id
      ) VALUES (
        ${body.name},
        ${body.email},
        ${body.contactNo},
        ${body.address},
        ${body.city},
        ${body.province}::province_type,
        ${body.country},
        ${body.paymentMethod}::payment_method_type,
        ${body.transaction_screenshot},
        'pending'::status_type,
        ${userId}
      ) RETURNING id, created_at,user_id;
    `;

    const db = drizzle(sql);
    const resp = await db.delete(cart).where(eq(cart.user_id, userId));

    return NextResponse.json(
      {
        message: "Order created successfully",
        orderId: rows[0].id,
        createdAt: rows[0].created_at,
        userId: rows[0].user_id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
