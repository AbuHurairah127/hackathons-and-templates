import ProductCard, {
  ProductCardData,
} from "@/sections/common/productCard/ProductCard";
import { NextRequest } from "next/server";

// Define the ProductCardData interface to match the API response
export interface ProductCardData {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  images: string;
  average: number;
  totalReviewCount: number;
}

const page = async ({
  searchParams,
}: {
  searchParams: { category?: string; brand?: string };
}) => {
  // Construct the API URL with category query parameter if provided
  const category = searchParams.category || "";
  const brand = searchParams.brand || "";
  const apiUrl = `/api/get-products?category=${encodeURIComponent(
    category
  )}&brand=${encodeURIComponent(brand)}`;

  // Fetch data from the Next.js API
  const res = await fetch(`${`http://localhost:3000`}${apiUrl}`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const { data }: { data: ProductCardData[] } = await res.json();
  console.log("🚀 ~ data:", data);

  return (
    <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)] gap-8 lg:gap-14 xl:gap-20 justify-center items-center max-w-screen mx-12 lg:mx-24 my-8">
      {data.map((product: ProductCardData, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default page;
export const revalidate = "force-dynamic";
