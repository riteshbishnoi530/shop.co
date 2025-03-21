import React from 'react'
import Header from './common/Header'
import Image from 'next/image';
const Hero = () => {
    return (
        <>
            <Header />
            <div className="relative bg-[#F2F0F1] overflow-hidden">
                <div className="flex items-end  max-w-[1240px]  mx-auto relative h-[663px] max-lg:h-full max-lg:flex-col">
                    <div className="pt-[103px] px-4 pb-[116px] max-lg:pb-0 max-xl:pt-20 max-lg:pt-10 max-md:pt-8 relative z-10 mr-auto max-lg:ml-auto">
                        <h1 className="text-[64px] font-bold font-integral leading-[64px] max-w-[577px] max-lg:max-w-[700px] max-lg:text-5xl max-sm:text-[36px] max-sm:leading-[34px]">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>
                        <p className="text-black/60 text-base font-normal leading-[22px] max-sm:text-sm mt-8 max-w-[548px] max-lg:max-w-[700px] max-sm:mt-5">
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense
                            of style.
                        </p>
                        <button className="cursor-pointer bg-black text-white flex items-center justify-center mt-5 w-[210px] min-w-[210px] max-sm:min-w-full max-sm:w-full h-[52px] rounded-full border border-solid border-black transition-all ease-linear duration-300 hover:bg-white hover:text-black">
                            Shop Now
                        </button>
                        <div className="flex items-center max-sm:flex-col justify-between mt-12 max-sm:mt-5 max-lg:justify-center gap-7">
                            <div className="flex gap-7 max-md:justify-center">
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[40px] leading-[100%] max-md:text-2xl font-santoshi-bold">
                                        200+
                                    </h3>
                                    <p className="font-normal text-base leading-[22px] text-[#00000099] max-md:text-xs">
                                        International Brands
                                    </p>
                                </div>
                                <div className="h-[74px] border-[#0000001A] border border-solid max-md:h-[52px]"></div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-[40px] leading-[100%] max-md:text-2xl font-santoshi-bold">
                                        2,000+
                                    </h3>
                                    <p className="font-normal text-base leading-[22px] text-[#00000099] max-md:text-xs">
                                        High-Quality Products
                                    </p>
                                </div>
                            </div>
                            <div className="h-[74px] border-[#0000001A] border border-solid max-md:h-[52px] max-sm:hidden"></div>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-[40px] leading-[100%] max-md:text-2xl font-santoshi-bold">
                                    30,000+
                                </h3>
                                <p className="font-normal text-base leading-[22px] text-[#00000099] max-md:text-xs">
                                    Happy Customers
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div>
                            <Image
                                src="/assets/images/hero-image.webp"
                                alt="infulencers-img"
                                width={655}
                                height={500}
                                className="w-full max-w-[655px] max-xl:max-w-[460px] max-lg:max-w-[555px] pointer-events-none"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero