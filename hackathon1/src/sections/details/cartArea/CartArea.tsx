"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import { SizeButton } from "@/app/details/[id]/page";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import { useAppDispatch } from "@/store/hooks";

const CartArea = ({
  price,
  quantity,
  sizes,
  otherData,
}: {
  price: number | undefined;
  quantity: number | undefined;
  sizes: string[] | undefined;
  otherData: {
    _id: string | undefined;
    name: string | undefined;
    image:
      | {
          _type: "image";
          asset: {
            _ref: string;
            _type: "reference";
          };
        }
      | undefined;
  };
}) => {
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const [sizeToBuy, setSizeToBuy] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="">
        <h4 className="uppercase font-extrabold mt-12 tracking-wider text-sm">
          Select Size
        </h4>
        {sizes?.map((size) => (
          <SizeButton key={size} label={size} />
        ))}
      </div>
      <div className="flex">
        <h4 className="font-bold mr-8">Quantity :</h4>
        <div className="flex h-8 items-center">
          <button
            className={
              quantityToBuy !== 1
                ? "bg-gray-300 px-3 py-0.5 rounded-full text-3xl font-light"
                : "bg-gray-200 px-3 py-0.5 rounded-full text-3xl font-light text-gray-500"
            }
            disabled={quantityToBuy === 1}
            onClick={() => {
              setQuantityToBuy(quantityToBuy - 1);
            }}
          >
            -
          </button>
          <span className="mx-5 w-12 text-center">{quantityToBuy}</span>
          <button
            className={
              quantityToBuy < quantity!
                ? "bg-gray-300 px-3 py-0.5 rounded-full text-3xl font-light"
                : "bg-gray-200 px-3 py-0.5 rounded-full text-3xl font-light text-gray-500"
            }
            disabled={quantityToBuy >= quantity!}
            onClick={() => {
              setQuantityToBuy(quantityToBuy + 1);
            }}
          >
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
        <span className="font-bold text-lg">$ {price}</span>
      </div>
    </>
  );
};

export default CartArea;
