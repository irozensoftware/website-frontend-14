"use client";
import React, { useState } from "react";
import DescriptionContent from "./DescriptionContent";
import Image from "next/image";

const ProductDetailsAndReview = ({ product }) => {
  const [activeTab, setActiveTab] = useState("1");
  const images = product?.images || [];
  return (
    <>
      <div className="border-y border-gray-200 my-4">
        <div className="flex justify-center items-center gap-6">
          <div
            onClick={() => setActiveTab("1")}
            className={` relative group cursor-pointer text-black-base text-base sm:text-lg md:text-xl pt-3 font-medium uppercase`}
          >
            Description
            <span
              className={`absolute top-0 left-0 h-0.5 bg-primary-base transition-all duration-300 
                w-ful group-hover:w-full
              `}
            ></span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10">
          <DescriptionContent description={product?.description} />
          <div className="pt-5 space-y-4">
            {images?.length > 0 && (
              <>
                {images?.map((image, index) => <div key={index}>
                    <Image
                      width={1500}
                      height={800}
                      src={
                        `${process.env.NEXT_PUBLIC_API_URL}/storage/` +
                        image?.image
                      }
                      alt={product?.name}
                      layout="responsive"
                      className={`object-cover transition-opacity duration-500 `}
                    />
                  </div>)}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsAndReview;
