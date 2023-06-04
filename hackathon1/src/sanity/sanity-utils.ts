import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
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
export async function fetchData() {
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
    console.log("Fetched data:", data);

    // Return or further process the data as needed
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error scenarios
  }
}
export async function fetchGenderBasedData(gender: string) {
  console.log(
    "🚀 ~ file: sanity-utils.ts:39 ~ fetchGenderBasedData ~ gender:",
    gender
  );
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
    console.log("Fetched data:", data);

    // Return or further process the data as needed
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error scenarios
  }
}
