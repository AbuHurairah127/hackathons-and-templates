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
      <div className="cards flex lg:px-24 w-screen flex-wrap items-center justify-center">
        <div className="w-[90vw] lg:w-1/2 lg:h-[55vh] flex flex-col lg:justify-between lg:pr-8 space-y-5 mb-12 lg:mb-0">
          <div className="bg-[#D6D6D8] lg:h-1/2 flex flex-col md:flex-row pt-8 lg:pt-0 justify-center items-center mb-4">
            <div className="lg:w-1/2 h-full flex flex-col justify-center items-center">
              <h3 className="font-bold text-3xl text-center">GET UP TO 60%</h3>
              <p className="text-center">For the summer season</p>
            </div>
            <Image src={card1} alt={""} />
          </div>
          <div className="lg:h-1/2 bg-[#212121] py-12 lg:py-0 flex flex-col justify-center items-center">
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
        <div className="lg:w-1/2 lg:h-[55vh] flex w-[90vw] justify-between flex-wrap md:flex-nowrap">
          <div className="w-[90vw] lg:h-full md:w-1/2 bg-[#EFE1C7] md:mr-8 flex flex-col justify-between max-h-full overflow-hidden mb-12 md:mb-0">
            <div className="px-4 pt-5">
              <p>Flex Sweatshirt</p>
              <p className="font-semibold">
                <span className="line-through font-light">$100.00</span>&nbsp;
                $75.00
              </p>
            </div>
            <Image src={card2} alt={""} />
          </div>
          <div className="w-[90vw] md:w-1/2 bg-[#D7D7D9] flex flex-col justify-between max-h-full overflow-hidden">
            <div className="px-4 pt-5">
              <p>Flex Push Button Bomber</p>
              <p className="font-semibold">
                <span className="line-through font-light">$225.00</span>&nbsp;
                $190.00
              </p>
            </div>
            <Image src={card3} alt={""} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
