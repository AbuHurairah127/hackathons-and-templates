import React from "react";
import card1 from "@/assets/card 1.png";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";
const Promotions = () => {
  return (
    <div className="overflow-x-hidden max-w-screen min-h-screen flex flex-col justify-center items-center">
      <h4 className="font-semibold capitalize text-[#0000ff] text-xs tracking-wider">
        PROMOTIONS
      </h4>
      <h3 className="lg:text-5xl text-4xl font-bold my-5 text-center">
        Our Promotions Events
      </h3>
      <div className=" grid lg:px-24 lg:grid-cols-4">
        <div className="col-span-2 grid grid-cols-2 grid-rows-2">
          <div className="row-span-1 col-span-2 bg-[#D6D6D8] lg:h-1/2 flex flex-col md:flex-row pt-8 lg:pt-0 justify-center items-center mb-4 overflow-hidden">
            <div className="lg:w-1/2 h-full flex flex-col justify-center items-center">
              <h3 className="font-bold text-3xl text-center">GET UP TO 60%</h3>
              <p className="text-center">For the summer season</p>
            </div>
            <Image src={card1} alt={""} />
          </div>
          <div className="lg:h-1/2 bg-[#212121] py-12 lg:py-0 col-span-2 row-span-1">
            <h3 className="font-bold text-3xl text-white my-4">GET 30% Off</h3>
            <p className="text-white">Use Promo Code</p>
            <Button
              variant={"secondary"}
              className="text-white bg-[#474747] tracking-[4px] mb-3"
            >
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <div className="bg-[#EFE1C7] col-span-1">
            <div className="px-4 pt-5">
              <p>Flex Sweatshirt</p>
              <p className="font-semibold">
                <span className="line-through font-light">$100.00</span>&nbsp;
                $75.00
              </p>
            </div>
            <Image src={card2} alt={""} className="self-center" />
          </div>
          <div className=" col-span-1 bg-[#D7D7D9]">
            <div className="px-4 pt-5">
              <p>Flex Push Button Bomber</p>
              <p className="font-semibold">
                <span className="line-through font-light">$225.00</span>&nbsp;
                $190.00
              </p>
            </div>
            <Image src={card3} alt={""} className="self-center" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
