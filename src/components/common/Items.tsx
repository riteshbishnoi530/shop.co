"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { SellItemsType } from "@/utils/helper";
import Heading from "./Heading";

interface SellItemsProps {
  heading: string;
  itemMap: SellItemsType[];
  buttonText?: string;
}

const Items = ({
  heading,
  itemMap,
  buttonText,
}: SellItemsProps) => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Heading customHeading={heading} headingClass="mb-[55px] max-sm:mb-8 text-center uppercase" />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {itemMap.map((item: SellItemsType, index: number) => (
          <SwiperSlide key={index}>
            <Link
              href={`/product/${item.productTitle
                .toLocaleLowerCase()
                .replaceAll(" ", "-")}`}
              className="max-w-[295px] w-full rounded-[20px]"
            >
              <div className="bg-dark-gray overflow-hidden group rounded-[20px]">
                <Image
                  src={item.product}
                  alt="product"
                  width={295}
                  height={298}
                  className="h-[298px] group-hover:scale-95 object-cover transition-all duration-300 w-[295px]"
                />
              </div>
              <p className="font-bold text-xl mt-4 leading-[100%]">
                {item.productTitle}
              </p>
              <span className="flex items-center py-2 gap-[13px]">
              {item.productRatingStar && (
  <Image
    className="max-h-[18px] w-fit"
    src={item.productRatingStar}
    alt="star"
    width={104}
    height={18}
  />
)}

                <p className="text-sm">
                  {item.productRating}/<span className="text-gray">5</span>
                </p>
              </span>
              <span className="flex gap-2.5 items-center">
                <p className="font-bold text-2xl leading-[100%]">
                  ${item.productPrice}
                </p>
                {item.price && (
                  <span className="w-max relative">
                    <span className="absolute top-[56%] w-full h-[1px] bg-black/40"></span>
                    <p className="relative text-black/40 text-2xl font-bold ">
                      ${item.price}
                    </p>
                  </span>
                )}
                {item.discount && (
                  <span className="py-1.5 px-[13px] bg-red-600/10 text-red-600 rounded-[62px] font-xs font-medium">
                    {item.discount}%
                  </span>
                )}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {buttonText && (
        <div className="w-full flex justify-center items-center pt-[51px]">
          <button className="py-[13px] px-[78px] hover:bg-black hover:text-white border rounded-[62px] border-black/10 font-medium">{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default Items;