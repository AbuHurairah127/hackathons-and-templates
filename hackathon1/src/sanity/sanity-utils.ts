import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ProductInCart } from "@/slices/cartSlice";

type Size = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL";

type Gender = "male" | "female" | "kids";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
  gender: Gender[];
  category?: string;
  sizes: Size[];
  currentStock: number;
  availability: boolean;
}

export type ProductsData = Product[];

// Create a Sanity client
const client = createClient({
  projectId: process.env.PROJECT_ID!,
  dataset: process.env.DATASET,
  useCdn: true, // Enable CDN if available for faster responses
  apiVersion: "2023-04-30",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
// Function to fetch data from Sanity
export async function fetchData(docs_quantity?: number) {
  if (!docs_quantity) {
    try {
      // Define your query
      const query = `*[_type == "product"]{
      _id,
      name,
      category,
      price,
      "images":images[0],
      gender
    }`;

      // Fetch data using the query
      const data = await client.fetch(query);

      // Process the fetched data

      // Return or further process the data as needed
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error scenarios
    }
  } else {
    try {
      // Define your query
      const query = `*[_type == "product"]{
            _id,
            name,
            category,
            price,
            "images":images[0]
        }|order(_createdAt desc)[0...$docs_quantity]`;

      // Fetch data using the query and pass the gender as a parameter
      const data = await client.fetch(query, { docs_quantity });

      // Process the fetched data

      // Return or further process the data as needed
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error scenarios
    }
  }
}
export async function fetchGenderBasedData(gender: string) {
  try {
    // Define your query
    const query = `*[_type == "product" && $gender in gender]{
        _id,
        name,
        category,
        price,
        "images":images[0]
    }`;

    // Fetch data using the query and pass the gender as a parameter
    const data = await client.fetch(query, { gender });

    // Process the fetched data

    // Return or further process the data as needed
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error scenarios
  }
}

export const fetchSingleProduct = async (id: string) => {
  try {
    const query = `*[_type == "product"&& _id == $id]`;

    // Fetch data using the query
    const data = await client.fetch<ProductsData>(query, { id });

    // Return the fetched data
    return data[0];
  } catch (error) {}
};

export const fetchProductInCart = async (id: string[]) => {
  try {
    const query = `*[_type == "product"&& _id in $id]{
      _id,
      name,
      "images":images[0],
      price,
      category
    }`;

    // Fetch data using the query
    const data = await client.fetch<ProductInCart[]>(query, { id });
    return data;
  } catch (error) {}
};
