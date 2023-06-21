import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { sora } from "@/app/layout";
import { Button } from "../../../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import bazaar from "@/assets/bazaar.png";
import bustle from "@/assets/bustle.png";
import instyle from "@/assets/instyle.png";
import versace from "@/assets/versace.png";
import heroImage from "@/assets/hero.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className={"lg:h-[90vh] lg:flex min-w-screen"}>
      <div className="flex flex-col lg:w-[50vw] px-16 py-12 lg:px-24 lg:py-20">
        <Badge
          className={`border-none bg-[#E1EDFF] text-[#0000FF] rounded-lg  px-5 text-md w-[120px] h-[40px] font-semibold ${sora.className}`}
        >
          Sale 70%
        </Badge>
        <h2 className="font-bold text-5xl lg:text-6xl my-10">
          An Industrial Take on Streetwear
        </h2>
        <p className="lg:mr-48 text-[#666666]">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link
          href={"/allProducts"}
          className="bg-black text-white text-md font-semibold rounded-none py-5 w-fit px-8 mt-10 flex"
        >
          <ShoppingCart className="mr-2" />
          Start Shopping
        </Link>
        <div className="flex justify-between mt-16 flex-wrap lg:space-y-0 space-y-2">
          <Image src={bazaar} alt="clients" />
          <Image src={bustle} alt="clients" />
          <Image src={versace} alt="clients" />
          <Image src={instyle} alt="clients" />
        </div>
      </div>
      <div className="relative hidden lg:flex justify-center items-end lg:w-[50vw] ">
        <div className="h-[600px] w-[600px] bg-[#FFECE3] rounded-full absolute -z-10 top-20 left-20"></div>
        <Image src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
