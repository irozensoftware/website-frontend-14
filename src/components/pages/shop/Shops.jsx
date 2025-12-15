// app/shop/page.jsx (or components/ShopPage.jsx)
"use client";
import { useState } from "react";
import { FiFilter, FiGrid, FiList, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const ShopPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCategories, setExpandedCategories] = useState([]);



  
  return (
    <div className=" bg-gray-50">
        <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
           <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">Shop</h1>
           <div className="flex justify-center gap-2">
            <Link href={'/'} className="text-gray-300">Home</Link> /
            <p >Shop</p>
           </div>
        </div>

      {/* Breadcrumb */}
      <div className="">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <span className="hover:text-primary-base cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="text-primary-base font-medium">Shop</span>
            </div>
            <button 
              onClick={() => setShowSidebar(!showSidebar)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-primary-base text-white rounded-md hover:bg-primary-dark transition"
            >
              <FiFilter />
              <span>{showSidebar ? "Hide" : "Show"} Sidebar</span>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ShopPage;