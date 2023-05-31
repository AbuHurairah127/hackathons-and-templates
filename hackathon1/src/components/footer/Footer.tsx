"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-16 border-t border-t-black flex items-center justify-around">
      <p className="text-[#666666]">Copyright &copy; by Abu Hurairah.</p>
      <p className="text-[#666666]">
        Design by.{" "}
        <span className="font-bold text-black">Weird Design Studio</span>{" "}
      </p>
      <p className="text-[#666666]">
        Code by.{" "}
        <a
          href={"https://github.com/abuhurairah127"}
          target="_blank"
          className="font-bold text-black"
        >
          Abuhurairah127
        </a>
      </p>
    </div>
  );
};

export default Footer;
