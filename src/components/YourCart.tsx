"use client";
import { AddIcon, DeleteIcon, SubIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OrderSummary from "./OrderSummery";

interface CartItem {
  title: string;
  image: any;
  color: string;
  size: string;
  quantity: number;
  price: number;
  productPrice:number;
}

const YourCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index: number, change: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return (calculateSubtotal() * 20) / 100;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const deliveryFee = 15;
    return subtotal - discount + deliveryFee;
  };

  return (
    <div className="px-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="max-w-[1240px] w-full mx-auto">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex max-lg:flex-col gap-5">
            <div className="w-full max-w-[715px] max-lg:mx-auto">
              <div className="w-full py-5 px-6 border border-solid border-black/10 rounded-[20px]">
                {cartItems.map((item, index) => (
                  <div
                    className={`flex gap-4 ${cartItems.length > 1 && "pb-6"} ${index === 0 ? "" : "border-t border-solid border-black/10 pt-6"
                      } ${index === cartItems.length - 1 && "!pb-0"}`}
                    key={index}
                  >
                    <div className="bg-light-blue rounded-[8.66px] overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt="Product Image"
                          width={124}
                          height={124}
                        />
                      ) : (
                        <div className="w-[124px] h-[124px] bg-gray-200 flex justify-center items-center rounded-[8.66px]">
                          <span className="text-sm text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex w-full justify-between">
                        <p className="text-xl font-bold leading-[100%]">{item.title}</p>
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                      <p className={`text-sm leading-[100%] text-black`}>
                        Size: <span className="text-black/60 mt-0.5">{item.size}</span>
                      </p>
                      <p className={`text-sm leading-[100%] text-black`}>
                        Color: <span className="text-black/60">{item.color}</span>
                      </p>
                      <div className="flex justify-between mt-1.5 items-baseline">
                        <p className="font-bold text-2xl leading-[100%]">${item.productPrice}</p>
                        <div className="flex px-5 py-3 items-center gap-5 bg-light-blue rounded-[62px]">
                          <button
                            onClick={() => handleQuantityChange(index, -1)}
                            className="flex cursor-pointer"
                          >
                            <SubIcon />
                          </button>

                          <p className="font-medium min-w-5 leading-[100%]">
                            {item.quantity}
                          </p>

                          <button
                            onClick={() => handleQuantityChange(index, 1)}
                            className="flex cursor-pointer"
                          >
                            <AddIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                <div className="max-lg:mx-auto">
            <OrderSummary
              subtotal={calculateSubtotal()}
              discount={20}
              total={calculateTotal()}
              cartItems={cartItems}
            />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourCart;
