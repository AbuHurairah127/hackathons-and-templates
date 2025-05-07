import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getProducts } from "../../../sanity/sanity-utils";
import { z } from "zod";

// Define query params schema
const querySchema = z.object({
  category: z.string().optional(),
  brand: z.string().optional(),
});

// Define product interface with average rating
interface ProductWithRating {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  images: string;
  averageRating: number;
}

export const GET = async (request: NextRequest) => {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const parsed = querySchema.safeParse({
      category: searchParams.get("category"),
      brand: searchParams.get("brand"),
    });

    if (!parsed.success) {
      return NextResponse.json({
        status: 400,
        error: parsed.error.errors,
      });
    }

    const { category, brand } = parsed.data;

    // Fetch average ratings from Postgres using raw SQL
    const { rows: reviewData } = await sql`
      SELECT product_id, AVG(rating) AS avg_rating
      FROM reviews
      GROUP BY product_id
    `;

    // Create a map of productId to average rating
    const ratingMap = new Map<string, number>();
    reviewData.forEach((row: { product_id: string; avg_rating: number }) => {
      ratingMap.set(row.product_id, row.avg_rating);
    });
    console.log("🚀 ~ GET ~ ratingMap:", ratingMap);

    // Fetch products from Sanity
    const products = await getProducts({ category, brand });

    console.log("🚀 ~ GET ~ products:", products);
    // Combine products with ratings and sort
    const productsWithRatings: ProductWithRating[] = products.map(
      (product) => ({
        ...product,
        averageRating: ratingMap.get(product._id) || 0,
      })
    );
    console.log("🚀 ~ GET ~ productsWithRatings:", productsWithRatings);

    // Sort by average rating (descending), with zero ratings at the end
    productsWithRatings.sort((a, b) => {
      if (a.averageRating === 0 && b.averageRating === 0) return 0;
      if (a.averageRating === 0) return 1;
      if (b.averageRating === 0) return -1;
      return b.averageRating - a.averageRating;
    });

    return NextResponse.json({
      status: 200,
      data: productsWithRatings,
    });
  } catch (error) {
    console.error("Error fetching products:", (error as Error).message);
    return NextResponse.json({
      status: 500,
      error: "Failed to fetch products || " + error.message,
    });
  }
};
