"use client";
import { categoryData } from "@/utils/db/db_category";
import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline, IoChevronDownOutline } from "react-icons/io5";


const NavbarSearch = () => {
  const [activeCategory, setActiveCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Accessories");
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveCategory(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="flex items-center border-2 focus-within:border-primary-base border-black-muted rounded-full relative">
      <input
        type="text"
        placeholder="Search for products"
        className="px-4 placeholder:text-primary-base text-black-muted w-37.5 xl:w-64 text-sm focus:outline-none"
      />
      <div
        ref={dropdownRef}
        className="border-l border-black-muted px-2 py-2 relative"
      >
        <div
          onClick={() => setActiveCategory(!activeCategory)}
          className="flex justify-between w-[110px] xl:w-[150px] items-center gap-2 cursor-pointer"
        >
          <p className="text-[15px] text-black-muted capitalize">
            {selectedCategory?.slice(0, 12)}
            {selectedCategory?.length > 12 ? "..." : ""}
          </p>
          <IoChevronDownOutline className="text-[20px] text-black-muted" />
        </div>

        {/* Select Category */}
        <div
          className={`absolute -left-5 mt-2.5 w-50 px-3 py-2 bg-white/80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-200 ${
            activeCategory
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="space-y-2">
            {categoryData.map((item, index) => (
              <p
                onClick={() => {
                  setSelectedCategory(item?.name);
                  setActiveCategory(false);
                }}
                className="text-[15px] cursor-pointer text-black-muted hover:text-primary-base duration-150 capitalize"
                key={index}
              >
                {item?.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-l border-black-muted px-2 py-2">
        <button className="px-4">
          <IoSearchOutline className="text-6" />
        </button>
      </div>
    </div>
  );
};

export default NavbarSearch;
