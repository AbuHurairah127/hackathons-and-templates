"use client";
import { urlFor } from "@/sanity/sanity-utils";
import { useAppSelector } from "@/store/hooks";
import { ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../../components/ui/button";

const Cart = () => {
  const quantity = useAppSelector((state) => state.cart.totalQuantity);
  const sub_total = useAppSelector((state) => state.cart.subTotal);
  const products = useAppSelector((state) => state.cart.product);
  return (
    <>
      {products.length > 0 ? (
        <div className="px-8 lg:px-40 relative">
          <h3 className="text-2xl font-bold mt-20">Shopping Cart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
            {products.map((prod, i) => (
              <div className="col-span-2 flex justify-between md:h-48" key={i}>
                <div className="flex flex-col md:flex-row">
                  <div className="aspect-square h-48 relative">
                    <Image
                      src={urlFor(prod.images).url()}
                      fill
                      alt=""
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="ml-8 flex flex-col justify-between">
                    <h4 className="text-xl font-light ">{prod.name}</h4>
                    <span className="font-bold text-[#412e2e]">
                      {prod.category}
                      <br />
                    </span>
                    <span className="font-bold bg-[#412e2e] text-white w-fit p-2.5">
                      {prod.size}
                    </span>
                    <span className="font-semibold">Delivery Estimation</span>
                    <span className="font-semibold text-[#FFD239]">
                      5 working Days
                    </span>
                    <span className="font-semibold">$ {prod.price}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between justify-self-end lg:pr-8">
                  <Trash2 size={25} className="self-end cursor-pointer" />
                </div>
              </div>
            ))}
            <div className="col-span-1 min-h-48 bg-[#F2F3F7] py-5 px-8 lg:row-start-1 lg:col-start-3 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold">Order Summary</h3>
              <div className="flex justify-between my-5">
                <div className="flex flex-col justify-evenly space-y-3">
                  <h4>Quantity</h4>
                  <h4>Sub Total</h4>
                </div>
                <div className="flex flex-col justify-evenly items-end space-y-3">
                  <span>{quantity} product</span>
                  <span>$ {sub_total}</span>
                </div>
              </div>
              <Button className="bg-black text-white text-md font-semibold rounded-none py-8 md:py-5 md:px-12 mr-8 flex w-full">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[50vh] flex flex-col justify-center items-center">
          <ShoppingBag size={72} />
          <h2 className="text-4xl font-bold">Your shopping bag is empty.</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
