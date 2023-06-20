import { Delete, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../../components/ui/button";
import { currentUser, auth } from "@clerk/nextjs";

const page = async () => {
  const { userId } = auth();
  return (
    <>
      {/* <div className="h-[50vh] flex flex-col justify-center items-center">
        <ShoppingBag size={72} />
        <h2 className="text-4xl font-bold">Your shopping bag is empty.</h2>
      </div> */}
      <div className="px-8 lg:px-40 relative">
        <h3 className="text-2xl font-bold mt-20">Shopping Cart: {userId}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
          <div className="col-span-2 flex justify-between md:h-48">
            <div className="flex flex-col md:flex-row">
              <div className="aspect-square h-48 relative">
                <Image
                  src={"/Image5.png"}
                  fill
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <div className="ml-8 flex flex-col justify-between">
                <h4 className="text-xl font-light ">Lorem Dress Title</h4>
                <span className="font-bold text-[#666666]">Dress</span>
                <span className="font-semibold">Delivery Estimation</span>
                <span className="font-semibold text-[#FFD239]">
                  5 working Days
                </span>
                <span className="font-semibold">$ 545</span>
              </div>
            </div>
            <div className="flex flex-col justify-between justify-self-end lg:pr-8">
              <Trash2 size={25} className="self-end" />
              <div className="flex">
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
            </div>
          </div>
          <div className="col-span-1 min-h-48 bg-[#F2F3F7] p-8 lg:row-start-1 lg:col-start-3 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold">Order Summary</h3>
            <div className="flex justify-between my-8">
              <div className="flex flex-col justify-evenly space-y-8">
                <h4>Quantity</h4>
                <h4>Sub Total</h4>
              </div>
              <div className="flex flex-col justify-evenly items-end space-y-8">
                <span>1 product</span>
                <span>$ 1500</span>
              </div>
            </div>
            <Button className="bg-black text-white text-md font-semibold rounded-none py-8 md:py-5 md:px-12 mr-8 flex w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
