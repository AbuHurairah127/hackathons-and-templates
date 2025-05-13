import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Create custom types for ENUM-like fields
    // await sql`
    //   CREATE TYPE province_type AS ENUM (
    //     'Punjab',
    //     'Sindh',
    //     'Khyber Pakhtunkhwa',
    //     'Balochistan',
    //     'Gilgit-Baltistan',
    //     'Azad Jammu and Kashmir'
    //   );
    // `;
    // await sql`
    //   CREATE TYPE payment_method_type AS ENUM ('COD', 'Online');
    // `;
    // await sql`
    //   CREATE TYPE status_type AS ENUM ('pending', 'completed', 'failed');
    // `;

    // // Create the user_orders table
    // await sql`
    //   CREATE TABLE IF NOT EXISTS user_orders (
    //     id BIGSERIAL PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     email VARCHAR(255) NOT NULL,
    //     contact_no VARCHAR(13) NOT NULL,
    //     address TEXT NOT NULL,
    //     city VARCHAR(100) NOT NULL,
    //     province VARCHAR(100) NOT NULL,
    //     country VARCHAR(100) NOT NULL DEFAULT 'Pakistan',
    //     payment_method VARCHAR(50) NOT NULL,
    //     transaction_screenshot_path VARCHAR(255),
    //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //     status status_type DEFAULT 'pending',
    //     user_id varchar(255) NOT NULL
    //   );
    // `;

    await sql`drop table orders`;

    return NextResponse.json(
      { message: "Table created successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error creating table:", error);
    return NextResponse.json(
      { error: "Failed to create table", details: error.message },
      { status: 500 }
    );
  }
};
