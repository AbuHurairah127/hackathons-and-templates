import { createClient } from "next-sanity";
// Create a Sanity client
const client = createClient({
  projectId: process.env.PROJECT_ID!,
  dataset: process.env.DATASET,
  useCdn: true, // Enable CDN if available for faster responses
  apiVersion: "2023-04-30",
});

// Function to fetch data from Sanity
export async function fetchData() {
  try {
    // Define your query
    const query = `*[_type == "product"]{
      _id,
      name
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
