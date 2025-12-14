"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";

const tabs = ["NEW", "FEATURED", "TOP SELLERS"];

const products = [
  {
    id: 1,
    title: "Food Bowl Color Thick Legs...",
    category: "Pet Supplies",
    price: 8.71,
    image: "/images/p1.png",
  },
  {
    id: 2,
    title: "Pet Hair Remover Mitt static...",
    category: "Pet Supplies",
    price: 13.37,
    image: "/images/p2.png",
  },
  {
    id: 3,
    title: "12cm*7.5cm*3.5cm Bird Bath Tub",
    category: "Pet Supplies",
    price: 10.44,
    image: "/images/p3.png",
  },
  {
    id: 4,
    title: "Dog Supplies Accessories Are For...",
    category: "Pet Supplies",
    price: 0.93,
    image: "/images/p4.png",
  },
];

export default function YouAlsoLike() {
  const [activeTab, setActiveTab] = useState("NEW");

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semibold">YOU ALSO LIKE</h2>
          <div className="flex gap-4 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 border-b-2 transition ${
                  activeTab === tab
                    ? "border-primary-base text-primary-base"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 text-gray-400">
          <button className="hover:text-black">
            <FaLeftLong size={22} />
          </button>
          <button className="hover:text-black">
            <FaRightLong size={22} />
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="group">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-sm font-medium line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {item.category}
              </p>
              <p className="text-primary-base font-semibold mt-2">
                ${item.price}
              </p>
              <button className="mt-3 bg-primary-base text-white text-xs px-5 py-2 rounded-full hover:opacity-90">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
