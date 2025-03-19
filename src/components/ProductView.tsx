"use client";
import Image from "next/image";
import {
    ALSO_LIKE_LIST,
  NEW_ARRIVALS_LIST,
  SELECT_COLOR,
  SELECT_SIZE,
  TOP_SELLING_LIST,
} from "@/utils/helper";
import { useState } from "react";
// import CustomButton from "../common/CustomButton";
import { useParams } from "next/navigation";
import Product from "./Product";
import ImageView from "./ImageView";

const ProductView = () => {
  const params = useParams();
  const { title } = params;
  console.log("Title from params:", title);

  const combinedList = [
    ...NEW_ARRIVALS_LIST,
    ...TOP_SELLING_LIST,
    ...ALSO_LIKE_LIST,
  ];

  const product = combinedList.find((item) => {
    const formattedTitle = title?.toLowerCase().replace(/ /g, "-");
    const formattedProductTitle = item.productTitle
      .toLowerCase()
      .replace(/ /g, "-");
    return formattedProductTitle === formattedTitle;
  });

  console.log("Selected Product:", product);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex gap-10">
          <ImageView
            productImage={product?.product}
            productImageTwo={product?.productImageTwo}
            productImageThree={product?.productImageThree}
          />
          <Product
            productTitle={product?.productTitle}
            productStart={product?.productRatingStart}
            productRating={product?.productRating}
            productDescription={product?.productDescription}
            productDiscount={product?.discount}
            price={product?.price}
            productPrice={product?.productPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductView;