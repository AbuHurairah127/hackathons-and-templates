"use client";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/slices/cartSlice";
import { errToast, successToast } from "@/utils/toasts";

const CartArea = ({
  price,
  quantity,
  sizes,
  otherData,
  availability,
}: {
  price: number | undefined;
  quantity: number | undefined;
  sizes: string[] | undefined;
  availability: boolean | undefined;
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
  const addToCartHandler = () => {
    if (sizeToBuy && quantityToBuy > 0) {
      dispatch(
        addToCart({
          _id: otherData._id!,
          name: otherData.name!,
          image: otherData.image!,
          price: price!,
          quantity: quantityToBuy,
          size: sizeToBuy,
        })
      );
      successToast("Successfully added to the cart.");
    } else {
      errToast("Please! Select a size to buy.");
    }
    console.log("button working");
  };
  return (
    <>
      <div className="">
        <h4 className="uppercase font-extrabold mt-12 tracking-wider text-sm">
          Select Size
        </h4>
        {sizes?.map((size) => (
          <button
            className={
              sizeToBuy === size
                ? "m-2 text-[#666666] font-semibold uppercase p-3 bg-gray-300 rounded-full border-2 border-black w-12 h-12"
                : "m-2 text-[#666666] font-semibold uppercase  hover:bg-gray-300 rounded-full w-12 h-12 text-center"
            }
            key={size}
            onClick={() => setSizeToBuy(size)}
          >
            {size}
          </button>
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
        <Button
          className="bg-black text-white text-md font-semibold rounded-none py-5 w-fit md:px-12 mr-8 flex"
          onClick={() => addToCartHandler()}
        >
          <ShoppingCart className="mr-2" size={18} />
          Add to Cart{" "}
        </Button>
        <span className="font-bold text-lg">$ {price}</span>
      </div>
      <div className="mt-8 flex">
        Available Stock:&nbsp;
        <p className={availability ? "" : "text-red-500"}>
          {availability ? quantity : "Out of Stock"}
        </p>
      </div>
    </>
  );
};

export default CartArea;
