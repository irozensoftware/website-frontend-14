// app/shop/page.jsx (or components/ShopPage.jsx)
"use client";
import { useState } from "react";
import {
  FiFilter,
  FiGrid,
  FiList,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const ShopPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCategories, setExpandedCategories] = useState([]);

  return (
    <div className="">
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">Shop</h1>
        <div className="flex justify-center gap-2">
          <Link href={"/"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold">Shop</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between border-b py-4 border-gray-200">
            <div className="flex items-center text-sm text-gray-600">
              <span className="hover:text-primary-base cursor-pointer">
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="text-primary-base font-medium">Shop</span>
            </div>
          </div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex items-center gap-2 py-2   rounded-md hover:bg-primary-dark transition"
          >
            <FaBars />
            <span className="font-medium text-black-muted">
              {showSidebar ? "Hide" : "Show"} Sidebar
            </span>
          </button>
        
         <div className="pt-2 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => (
              <Link href={'/product-category/pet-supplies'}
                key={index}
                className="group overflow-hidden rounded-lg bg-white transition-all duration-300 border border-gray-200 hover:-translate-y-1"
              >
                {/* Image with Scale Effect */}
                <div className="relative overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    alt="Bags & Baggage"
                    src="https://mukitalillc.com/wp-content/uploads/2025/09/10-430x430.png"
                    className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category Name Only */}
                <div className="p-4 text-center">
                  <h3 className="text-base font-medium text-gray-800 transition-colors group-hover:text-blue-600">
                    Bags & Baggage
                  </h3>
                </div>
              </Link>
            ))}
          </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
