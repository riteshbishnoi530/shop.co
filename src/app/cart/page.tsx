"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import YourCart from "@/components/YourCart";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      setCartItems(cart);
      setCartItemCount(cart.reduce((acc: number, item: any) => acc + item.quantity, 0)); // Calculate the initial cart count
    }
  }, []);
    return (
      <>
      <Header cartItemCount={cartItemCount} />
      <YourCart cartItems={cartItems} setCartItems={setCartItems} setCartItemCount={setCartItemCount} />
      <Footer/>
      </>
    );
  }
  