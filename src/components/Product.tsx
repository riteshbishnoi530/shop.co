"use client";
import React, { useState } from "react";
import { SlectIcon } from "@/utils/icons";
import { SELECT_COLOR, SELECT_SIZE } from "@/utils/helper";
import Image from "next/image";

const Product = ({
    productTitle,
    productStart,
    productRating,
    price,
    productPrice,
    productDiscount,
    productDescription,
    productImage,
    cart,
    setCart,
}: {
    productTitle: string;
    productStart: any;
    productRating: number;
    price: any;
    productPrice: number;
    productDiscount: any;
    productDescription: string;
    productImage: string;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        const newProduct = {
            productTitle,
            productStart,
            productRating,
            price,
            productPrice,
            productDiscount,
            productDescription,
            productImage,
            quantity,
            color: SELECT_COLOR[activeIndex],
        size: SELECT_SIZE[activeButton],
        };
    
        const updatedCart = [...cart, newProduct];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="max-w-[600px] w-full flex flex-col">
            <p className="font-integral font-bold text-[40px] max-sm:text-2xl mb-3.5 max-sm:mb-3 leading-[100%]">
                {productTitle}
            </p>
            <div className="flex gap-4">
                <Image className="max-h-[24px] w-fit" src={productStart} alt="star" width={139} height={24}/>
                <p className="text-sm">
                    {productRating}/<span className="text-gray">5</span>
                </p>
            </div>
            <div className="flex items-center mt-3.5 gap-3">
                <p className="font-bold text-2xl leading-[100%]">${productPrice}</p>
                {price && (
                    <span className="w-max relative">
                        <span className="absolute top-[56%] w-full h-[1px] bg-black/40"></span>
                        <p className="relative text-black/40 text-2xl font-bold ">
                            ${price}
                        </p>
                    </span>
                )}
                {productDiscount && (
                    <span className="py-1.5 px-[13px] bg-red-600/10 text-red-600 rounded-[62px] font-xs font-medium">
                        {productDiscount}%
                    </span>
                )}
            </div>
            <p className="text-black/60">{productDescription}</p>
            <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
            <p className="text-black/60">Select Colors</p>
            {/* Color selection */}
<div className="flex gap-4 mt-4">
    {SELECT_COLOR.map((item, index) => (
        <button
            key={index}
            className={`cursor-pointer flex justify-center items-center rounded-full ${item} w-10 h-10`} // Set size for color button
            onClick={() => setActiveIndex(index)}
        >
            {index === activeIndex && <SlectIcon />}
        </button>
    ))}
</div>

{/* Size selection */}
<div className="flex gap-3 mt-4">
    {SELECT_SIZE.map((item, index) => (
        <button
            key={index}
            onClick={() => setActiveButton(index)}
            className={`cursor-pointer bg-[#F0F0F0] py-3 text-black/60 px-6 max-sm:px-5 max-sm:text-sm rounded-[62px] ${index === activeButton && "!bg-black text-white"}`}
        >
            {item}
        </button>
    ))}
</div>

            <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
            <div className="flex gap-5">
                <div className="bg-[#F0F0F0] rounded-[62px] flex py-3.5 px-5 items-center gap-[38px]">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="flex w-[18.5px] cursor-pointer h-0.5 bg-black rounded-2xl"
                    ></button>
                    <p className="font-medium min-w-5 leading-[100%]">{quantity}</p>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="flex cursor-pointer w-[18.5px] h-0.5 bg-black rounded-2xl relative after:w-[18.5px] after:h-0.5 after:bg-black after:rounded-2xl after:absolute after:top-0 after:rotate-90"
                    ></button>
                </div>
                <button
                    onClick={addToCart}
                    className="w-full py-[13px] cursor-pointer bg-black border transition-all duration-300 ease-linear border-black rounded-[62px] text-white hover:bg-white hover:text-black"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
