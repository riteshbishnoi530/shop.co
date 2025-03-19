"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { OUR_HAPPY_CUSTOMERS } from '@/utils/helper';
import Heading from './common/Heading';
import { NextArrow, PrevArrow } from '@/utils/icons';

function HappyCustomers() {
    return (
        <div className='max-lg:px-4 py-20 max-md:py-16 max-sm:py-[50px]'>
            <div className='max-w-[1240px] mx-auto flex justify-between items-end mb-10'>
                <Heading customHeading="OUR HAPPY CUSTOMERS"/>
                <div className='flex gap-5'>
                    <PrevArrow/>
                    <NextArrow/>
                </div>
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                slidesPerView={3.5}  // Default for larger screens
                breakpoints={{
                    // When the screen width is <= 640px (mobile devices)
                    640: {
                        slidesPerView: 2, // Show 1 slide
                        spaceBetween: 10, // Space between slides
                    },

                    1024: {
                        slidesPerView: 3.5, // Show 1 slide
                        spaceBetween: 10, // Space between slides
                    },
                    320: {
                        slidesPerView: 1, // Show 1 slide
                        spaceBetween: 10, // Space between slides
                    },
                }}
                className="mySwiper"
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
}

export default HappyCustomers;
