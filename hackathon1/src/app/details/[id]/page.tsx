import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import { fetchSingleProduct } from "@/sanity/sanity-utils";
import CartArea from "@/sections/details/cartArea/CartArea";
export const SizeButton = (props: { label: String }) => {
  return (
    <button className="m-5 text-[#666666] font-semibold uppercase">
      {props.label}
    </button>
  );
};
const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchSingleProduct(params.id);
  return (
    <div className="">
      <div className="px-14 lg:px-24 py-16 min-h-screen bg-[#F2F3F7] flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 flex lg:h-[90vh]">
          <div className="flex flex-col w-[15%] overflow-y-auto mr-12">
            <Image src={"/Image5.png"} alt="" width={120} height={120} />
          </div>
          <div className="w-[70%] aspect-[9/12] relative">
            <Image fill src="/Image5.png" alt="" />{" "}
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
          <h3 className="text-2xl font-semibold">{data?.name}</h3>
          <span className="text-lg font-semibold text-[#888888]">
            {data?.category}
          </span>
          <CartArea
            sizes={data?.sizes}
            price={data?.price}
            quantity={data?.currentStock}
            otherData={{
              name: data?.name,
              _id: data?._id,
              image: data?.images[0],
            }}
          />
        </div>
      </div>
      <div className="px-16 lg:px-24  relative">
        <h1 className="absolute text-[#F2F3F7] font-bold text-6xl md:text-7xl lg:text-9xl top-0  -z-10">
          Overview
        </h1>
        <h3 className="font-bold ml-5 py-12">Product Information</h3>
        <hr />
        <div className="grid grid-cols-3 my-8">
          <div className="col-span-1 uppercase text-[#666666] font-bold text-sm">
            Product Detail
          </div>
          <div className="col-span-2">
            <p className="text-justify font-light">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
