import { fetchData, fetchGenderBasedData } from "@/sanity/sanity-utils";
import ProductCard, {
  ProductCardData,
} from "@/sections/common/productCard/ProductCard";
export async function generateStaticParams() {
  const names: string[] = ["allProducts", "female", "kids", "male"];

  return names.map((name) => ({
    name: name,
  }));
}

const page = async ({ params }: { params: { name: string } }) => {
  let data;
  if (params.name === "allProducts") {
    data = await fetchData();
  } else {
    data = await fetchGenderBasedData(params.name);
  }
  return (
    <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)] gap-8 lg:gap-14 xl:gap-20 justify-center items-center max-w-screen mx-12 lg:mx-24 my-8">
      {data.map((product: ProductCardData, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default page;

export const revalidate = true;
