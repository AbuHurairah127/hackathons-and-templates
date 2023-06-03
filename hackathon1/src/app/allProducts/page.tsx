import ProductCard from "@/sections/common/productCard/ProductCard";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)] gap-8 lg:gap-14 xl:gap-20 justify-center items-center max-w-screen mx-12 lg:mx-24 my-8">
      <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard />{" "}
    </div>
  );
};

export default page;
