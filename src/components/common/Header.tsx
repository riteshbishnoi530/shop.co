"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CartIcon, DropDownArrow, SearchIcon } from "../../utils/icons";
import { HEADER_LIST } from "@/utils/helper";
import SignUp from "./signUp";

const Header = ({ cartItemCount }: { cartItemCount: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SignUp />
      <div className="px-4">
        <div className="max-w-[1240px] py-6 container mx-auto">
          <div className="flex items-center gap-10 max-md:justify-between max-xl:gap-8 max-lg:gap-6">
            <div className="flex gap-4 items-center">
              <button
                className="cursor-pointer md:hidden h-[15px] relative z-50 overflow-hidden w-[19px] flex flex-col justify-between"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${isOpen && "translate-x-10"}`}
                ></span>
                <span
                  className={`flex w-full h-0.5 relative rounded-3xl bg-black transition-all duration-300 after:flex after:w-full after:h-0.5 after:rounded-3xl after:bg-black after:transition-all after:duration-300 top-0 left-0 ${isOpen && "rotate-45 after:rotate-90"}`}
                ></span>
                <span
                  className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${isOpen && "-translate-x-10"}`}
                ></span>
              </button>
              <Link
                href={"/"}
                className="text-[32px] font-bold leading-[100%] max-lg:text-3xl max-md:text-[25.2px] font-integral"
              >
                SHOP.CO
              </Link>
            </div>
            <div
              className={`flex gap-6 max-md:bg-white max-md:fixed max-md:flex-col transition-all duration-300 max-md:w-full max-md:h-full max-md:justify-center max-md:items-center max-md:top-0 max-md:-left-full max-md:bg-light-blue max-md:z-40 ${isOpen && "max-md:left-0"}`}
            >
              {HEADER_LIST.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.link}
                    className="leading-[100%] whitespace-nowrap flex gap-1 items-center"
                  >
                    {item.title} {item.submenu && <DropDownArrow />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute hidden group-hover:block bg-white shadow-md z-10">
                      <ul className="p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-1 px-4 hover:bg-gray-100">
                            <Link className=" whitespace-nowrap" href={subItem.link}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-10 md:w-full items-center max-sm:gap-3">
              <div className="max-w-[615px] max-md:hidden flex items-center bg-[#F0F0F0] rounded-[62px] w-full gap-3.5 py-3.5 px-[18px]">
                <label className="cursor-pointer" htmlFor="search">
                  <SearchIcon />
                </label>
                <div className="w-full">
                  <input
                    id="search"
                    placeholder="Search for products..."
                    className="w-full text-black/40 outline-none"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:hidden">
                <SearchIcon />
              </div>
              <div>
                <Link href={"/cart"}>
                  <div className="relative">
                    <CartIcon />
                    {cartItemCount > 0 && (
                      <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
