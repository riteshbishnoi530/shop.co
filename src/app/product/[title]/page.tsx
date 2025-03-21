"use client";
import AlsoLike from '@/components/AlsoLike'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ProductView from '@/components/ProductView'
import Reviwes from '@/components/Reviwes'
import React, { useEffect, useState } from 'react'

function page() {
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
    <ProductView/>
    <Reviwes/>
    <AlsoLike/>
    <Footer/>
    </>
  )
}

export default page