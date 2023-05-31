import Image from "next/image";
import React from "react";
import logo from "@/assets/logo_image.png";
import {
  Facebook,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Bottom = () => {
  return (
    <div className="max-w-screen lg:h-80 px-24 flex flex-col lg:flex-row mb-8 lg:mb-0">
      <div className="lg:w-1/3 flex-col lg:flex-row">
        <Image src={logo} alt={"logo"} width={200} />
        <p className="text-[#666666] my-8 ml-2 mr-8">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex space-x-4">
          <a
            href="/"
            className="w-10 h-10 bg-[#F1F1F1] rounded-xl flex items-center justify-center"
          >
            <TwitterIcon />
          </a>
          <a
            href={"/"}
            className="w-10 h-10 bg-[#F1F1F1] rounded-xl flex items-center justify-center"
          >
            <Facebook />
          </a>{" "}
          <a
            href={""}
            className="w-10 h-10 bg-[#F1F1F1] rounded-xl flex items-center justify-center"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
      <div className="lg:w-2/3 h-full flex flex-col lg:flex-row">
        <div className="lg:w-1/3 h-72">
          <h4 className="font-bold text-xl text-[#666666] my-5">Company</h4>
          <nav>
            <ul className="flex flex-col space-y-3 text-[#666666]">
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Terms of use</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/"}>How it Works</Link>
              </li>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:w-1/3">
          <h4 className="font-bold text-xl text-[#666666] my-5">Support</h4>
          <nav>
            <ul className="flex flex-col space-y-3 text-[#666666]">
              <li>
                <Link href={"/"}>Support Carrer</Link>
              </li>
              <li>
                <Link href={"/"}>24h Service</Link>
              </li>
              <li>
                <Link href={"/"}>Quick Chat</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:w-1/3">
          <h4 className="font-bold text-xl text-[#666666] my-5">Contact</h4>
          <nav>
            <ul className="flex flex-col space-y-3 text-[#666666]">
              <li>
                <Link href={"/"}>Whatsapp</Link>
              </li>
              <li>
                <Link href={"/"}>Support 24h</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
