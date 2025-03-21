"use client";
import {
  ALSO_LIKE_LIST,
  NEW_ARRIVALS_LIST,
  TOP_SELLING_LIST,
} from "@/utils/helper";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ProductImages from "./ProductImages";
import Product from "./Product";

const ProductView = () => {
  const params = useParams();
  const { title } = params;
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  console.log("Title from params:", title);

  const combinedList = [
    ...NEW_ARRIVALS_LIST,
    ...TOP_SELLING_LIST,
    ...ALSO_LIKE_LIST,
  ];

  const product = combinedList.find((item) => {
    const formattedTitle = Array.isArray(title) ? title.join("-").toLowerCase() : title?.toLowerCase().replace(/ /g, "-");
    const formattedProductTitle = item.productTitle
      .toLowerCase()
      .replace(/ /g, "-");
    return formattedProductTitle === formattedTitle;
  });

  console.log("Selected Product:", product);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="px-4">
      <ToastContainer position="top-right" />
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex gap-10 max-xl:flex-col">
          <ProductImages
            productImage={product?.product}
            productImageTwo={product?.productImageTwo}
            productImageThree={product?.productImageThree}
          />
          <Product
            productTitle={product?.productTitle}
            productStart={product?.productRatingStar}
            productRating={product?.productRating}
            productDescription={product?.productDescription}
            productDiscount={product?.discount}
            price={product?.price || ""}
            productPrice={product?.productPrice}
            cart={cart}
            setCart={setCart}
            productImage={product?.product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
