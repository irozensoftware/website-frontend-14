"use client";

import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/utils/db/ProductDB";

const tabs = ["NEW", "FEATURED", "TOP SELLERS"];

export default function YouAlsoLike() {
  const [activeTab, setActiveTab] = useState("NEW");
  const [activeIndex, setActiveIndex] = useState(null); // To manage hover state

  return (
    <section className="container py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-4  border-b-2 border-gray-300">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semibold relative pb-2">
            YOU ALSO LIKE
            {/* 20% blue border */}
            <span className="absolute left-0 -bottom-px h-0.5 w-full bg-primary-base"></span>
          </h2>
          <div className=" hidden md:flex gap-4 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1  font-medium  transition ${
                  activeTab === tab
                    ? " text-primary-base"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 text-gray-400">
          <button className="hover:text-black cursor-pointer">
            <BsChevronLeft size={22} />
          </button>
          <button className="hover:text-black cursor-pointer">
            <BsChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="md:hidden flex gap-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1  font-medium  transition ${
              activeTab === tab
                ? " text-primary-base"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Products */}
      <div className="grid grid-cols-2 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isActive={activeIndex === index} // Pass active state
            onHover={() => setActiveIndex(index)}
            onLeave={() => setActiveIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}
