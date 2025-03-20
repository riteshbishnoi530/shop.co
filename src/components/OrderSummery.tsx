"use client";
import { PromoCodeIcon } from "@/utils/icons";
import React from "react";

interface CartItem {
  title: string;
  quantity: number;
  price: number;
  productPrice:number;
}

const OrderSummary = ({
  cartItems,
  discount,
  subtotal,
  total
}: {
  cartItems: CartItem[];
  discount: number;
  subtotal: number;
  total: number;
}) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return (calculateSubtotal() * discount) / 100;
  };

  const calculateTotal = () => {
    const total = calculateSubtotal();
    const deliveryFee = 15;
    return total + deliveryFee - calculateDiscount();
  };

  return (
    <div className="max-w-[505px] w-full relative">
      <div className="lg:sticky lg:top-0 py-5 border border-solid border-black/10 rounded-[20px] w-full px-6 flex flex-col gap-6">
        <p className="text-2xl font-bold leading-[100%]">Order Summary</p>

        {/* Product Details */}
        <div className="flex flex-col w-full gap-5">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-xl text-black/60">{item.title}</p>
              </div>
            ))
          )}

          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <p className="text-xl text-black/60">Subtotal</p>
            <p className="text-xl font-bold">${calculateSubtotal()}</p>
          </div>

          {/* Discount */}
          <div className="flex items-center justify-between">
            <p className="text-xl text-black/60">Discount (-{discount}%)</p>
            <p className="text-xl font-bold text-red-600">
              ${calculateDiscount().toFixed(2)}
            </p>
          </div>

          {/* Delivery Fee */}
          <div className="flex items-center justify-between">
            <p className="text-xl text-black/60">Delivery Fee</p>
            <p className="text-xl font-bold">$15</p>
          </div>

          {/* Total */}
          <div className="w-full h-[1px] bg-black/10"></div>
          <div className="flex items-center justify-between">
            <p className="text-xl text-black">Total</p>
            <p className="text-xl font-bold">${calculateTotal().toFixed(2)}</p>
          </div>
          <form className="flex w-full items-center gap-3">
          <div className="w-full bg-[#F0F0F0] items-center flex gap-3  rounded-[62px] py-3 px-4">
          <PromoCodeIcon/>
            <input
              type="text"
              className="outline-none uppercase text-black/40"
              placeholder="Add promo code"
            />
          </div>
          <button className="rounded-[62px] py-[13px] px-[38.5px] bg-black hover:bg-white font-medium text-white hover:text-black">Apply</button>
        </form>
        <button className="rounded-[62px] gap-[14.63px] flex py-[19px] w-full justify-center items-center group bg-black text-white hover:bg-white hover:text-black font-medium">Go to Checkout </button>
        
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
