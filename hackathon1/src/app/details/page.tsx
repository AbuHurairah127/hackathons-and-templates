import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { ShoppingCart } from "lucide-react";
const SizeButton = (props: { label: String }) => {
  return (
    <button className="m-5 text-[#666666] font-semibold uppercase">
      {props.label}
    </button>
  );
};
const page = () => {
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
          <h3 className="text-2xl font-semibold">lorem Ipsum title</h3>
          <span className="text-lg font-semibold text-[#888888]">Category</span>
          <div className="">
            <h4 className="uppercase font-extrabold mt-12 tracking-wider text-sm">
              Select Size
            </h4>
            <SizeButton label={"xs"} />
            <SizeButton label={"sm"} />
            <SizeButton label={"md"} />
            <SizeButton label={"lg"} />
          </div>
          <div className="flex">
            <h4 className="font-bold mr-8">Quantity:</h4>
            <div className="flex h-8 items-center">
              <button className="bg-gray-200 px-3 py-0.5 rounded-full text-3xl font-light">
                -
              </button>
              <span className="mx-5">1</span>
              <button className="bg-gray-200 px-2.5 py-0.5 rounded-full text-3xl font-light">
                {" "}
                +
              </button>
            </div>
          </div>
          <div className="flex items-center mt-10">
            <Button className="bg-black text-white text-md font-semibold rounded-none py-5 w-fit md:px-12 mr-8 flex">
              <ShoppingCart className="mr-2" size={18} />
              Add to Cart{" "}
            </Button>
            <span className="font-bold text-lg">$ 545</span>
          </div>
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
            <p className="text-justify font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, qui error temporibus aliquid consequatur fuga totam
              facere labore harum nisi dolorem corrupti voluptates dolorum
              adipisci rerum ipsa quas voluptatum ex?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
