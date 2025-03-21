import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProductImages = ({
  productImage,
  productImageTwo,
  productImageThree,
}: {
  productImage?: string;
  productImageTwo?: string;
  productImageThree?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(productImage || null);

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("selectedImage", selectedImage);
    }
  }, [selectedImage]);

  return (
    <div className="flex gap-3.5 max-md:flex-col-reverse max-xl:mx-auto">
      <div className="flex flex-col max-md:flex-row max-xl:justify-center gap-3.5">
        {productImage && (
          <div
            className="cursor-pointer rounded-[20px] overflow-hidden"
            onClick={() => setSelectedImage(productImage)}
          >
            <Image
              src={productImage}
              width={152}
              height={167}
              alt="Product Image 1"
              className="w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] object-cover bg-light-blue"
            />
          </div>
        )}

        {productImageTwo && (
          <div
            className="cursor-pointer rounded-[20px] overflow-hidden"
            onClick={() => setSelectedImage(productImageTwo)}
          >
            <Image
              src={productImageTwo}
              width={152}
              height={167}
              alt="Product Image 2"
              className="w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] object-cover bg-light-blue"
            />
          </div>
        )}

        {productImageThree && (
          <div
            className="cursor-pointer rounded-[20px] overflow-hidden"
            onClick={() => setSelectedImage(productImageThree)}
          >
            <Image
              src={productImageThree}
              width={152}
              height={167}
              alt="Product Image 3"
              className="w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] object-cover bg-light-blue"
            />
          </div>
        )}
      </div>

      <div className="rounded-[20px] bg-light-blue max-xl:justify-center max-xl:flex overflow-hidden">
        {selectedImage ? (
          <Image
            src={selectedImage}
            width={444}
            height={530}
            alt="Selected Product"
            className="w-[444px] h-[530px] max-md:h-[450px] max-sm:h-[290px] object-cover max-sm:object-contain"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
    </div>
  );
};

export default ProductImages;
