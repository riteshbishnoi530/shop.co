"use client";
import React from "react";
import { NextArrow, PrevArrow } from "@/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { OUR_HAPPY_CUSTOMERS } from "@/utils/helper";
import Heading from "./common/Heading";
import Image from "next/image";

const HappyCustomers = () => {
  return (
    <div className="max-sm:px-4 pb-20 max-sm:pb-[50px] max-w-[1920px] mx-auto max-md:pb-14 max-lg:pb-16">
      <div className="max-w-[1240px] max-[1240px]:px-4 max-sm:px-0 w-full mx-auto container">
      <div className='max-w-[1240px] mx-auto flex justify-between items-end mb-10'>
                <Heading customHeading="OUR HAPPY CUSTOMERS"/>
                <div className='flex gap-5'>
                    <div className="custom-prev">
                    <PrevArrow/>
                    </div>
                    <div className="custom-next">
                    <NextArrow/>
                    </div>
                </div>
            </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 15,
            centeredSlides: true,
          },
          1115: {
            slidesPerView: 3.4,
            spaceBetween: 20,
            centeredSlides: true,
          },
        }}
        className="mySwiper happy-swiper"
      >
         {OUR_HAPPY_CUSTOMERS.map((item, index) => (
                    <SwiperSlide className='border border-black/10 rounded-[20px] px-8 pt-7 min-h-[240px]' key={index}>
                        <Image width={138} height={22} src="/assets/images/five-stars.webp" alt='five stars' />
                        <div className='flex font-bold text-xl'>
                            <p>{item.customerName}</p>
                            <Image width={24} height={24} src="/assets/images/green-tick.webp" alt='green tick' />
                        </div>
                        <p className='text-black/60'>{item.description}</p>
                    </SwiperSlide>
                ))}
      </Swiper>
    </div>
  );
};

export default HappyCustomers;