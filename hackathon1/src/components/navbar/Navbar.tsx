"use client";
import Image from "next/image";
import { Search, ShoppingCart, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./../ui/navigation-menu";
import Link from "next/link";
import logo from "@/assets/logo_image.png";
import { sora } from "@/app/layout";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  return (
    <nav
      className={
        "flex justify-between items-center px-5 lg:px-20 h-24 my-2 mx-8"
      }
    >
      {!isNavbar && (
        <Link href={"/"}>
          <Image src={logo} alt="logo" priority />
        </Link>
      )}
      <div className="lg:flex hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="space-x-5">
              <Link href={"/female"} legacyBehavior passHref>
                <NavigationMenuLink className={sora.className}>
                  Female
                </NavigationMenuLink>
              </Link>
              <Link href={"/male"} legacyBehavior passHref>
                <NavigationMenuLink className={sora.className}>
                  Male
                </NavigationMenuLink>
              </Link>
              <Link href={"/kids"} legacyBehavior passHref>
                <NavigationMenuLink className={sora.className}>
                  Kids
                </NavigationMenuLink>
              </Link>
              <Link href={"/allProducts"} legacyBehavior passHref>
                <NavigationMenuLink className={sora.className}>
                  All Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="lg:flex items-center border px-2.5 py-1 rounded-lg hidden ">
        <Search className="bg-white rounded-l" size={15} />
        <input
          type="search"
          placeholder="What you are looking for"
          className="rounded-r ml-2 xl:w-96 text-xs py-0.5 placeholder:text-xs placeholder:font-extralight"
        />
      </div>
      <div className="p-2.5 rounded-full bg-gray-300 lg:flex hidden">
        <Link href={"/cart"} className="">
          <ShoppingCart className="relative" />
          <span className="absolute top-[1.5rem] right-[6.5rem] h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
            0
          </span>
        </Link>
      </div>
      <div
        className={
          !isNavbar
            ? "lg:hidden absolute right-5 z-50 "
            : "lg:hidden fixed right-5 z-50"
        }
      >
        <Hamburger toggled={isNavbar} onToggle={() => setIsNavbar(!isNavbar)} />{" "}
      </div>
      {isNavbar && (
        <div className="flex flex-col w-screen h-screen fixed top-0 left-0 p-6 bg-white z-40">
          <Image src={logo} alt="logo" priority />
          <div className="flex flex-col h-full justify-center items-center">
            <div className="p-2 rounded-full bg-gray-300 flex w-fit relative">
              <ShoppingCart className="" />
              <span className="absolute -top-2 -right-2 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
                0
              </span>
            </div>
            <NavigationMenu className="max-h-40">
              <NavigationMenuList>
                <NavigationMenuItem className="space-y-2 flex flex-col text-lg text-center h-32">
                  <Link href={"/female"} legacyBehavior passHref>
                    <NavigationMenuLink className={sora.className}>
                      Female
                    </NavigationMenuLink>
                  </Link>
                  <Link href={"/male"} legacyBehavior passHref>
                    <NavigationMenuLink className={sora.className}>
                      Male
                    </NavigationMenuLink>
                  </Link>
                  <Link href={"/kids"} legacyBehavior passHref>
                    <NavigationMenuLink className={sora.className}>
                      Kids
                    </NavigationMenuLink>
                  </Link>
                  <Link href={"/allProducts"} legacyBehavior passHref>
                    <NavigationMenuLink className={sora.className}>
                      All Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
