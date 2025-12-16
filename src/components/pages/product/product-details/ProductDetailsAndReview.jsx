"use client";
import React, { useState } from "react";
import DescriptionContent from "./DescriptionContent";
import ReviewContent from "./ReviewContent";

const ProductDetailsAndReview = () => {
  const [activeTab, setActiveTab] = useState("1");

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
          {activeTab === "1" ? <DescriptionContent /> : <ReviewContent />}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsAndReview;
