"use client";
import { useGetAllCategoryQuery } from "@/redux/api/commonApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline, IoChevronDownOutline } from "react-icons/io5";
const NavbarSearch = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Accessories");
  const dropdownRef = useRef(null);
  const { data: allCategory } = useGetAllCategoryQuery();
  const router = useRouter();
  const handleOnEnter = () => {
    if (!search.trim()) return; // empty search prevent
    router.replace(`/search-product?search=${encodeURIComponent(search)}`);
  };

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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleOnEnter();
          }
        }}
        placeholder="Search for products"
        className="px-4 placeholder:text-primary-base text-black-muted w-37.5 xl:w-64 text-sm focus:outline-none"
      />

      <div
        ref={dropdownRef}
        className="border-l border-black-muted px-2 py-2 relative"
      >
        <div
          onClick={() => setActiveCategory(!activeCategory)}
          className="flex justify-between w-27.5 xl:w-37.5 items-center gap-2 cursor-pointer"
        >
          <p className="text-[15px] text-black-muted capitalize">
            {selectedCategory?.slice(0, 12)}
            {selectedCategory?.length > 12 ? "..." : ""}
          </p>
          <IoChevronDownOutline className="text-[20px] text-black-muted" />
        </div>

        {/* Select Category */}
        <div
          className={`absolute -left-5 mt-2.5 w-50 px-3 py-2 bg-white/90 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-200 ${
            activeCategory
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="space-y-2">
            {allCategory?.data?.map((item, index) => (
              <Link
                href={`/product-category/${item?.slug}`}
                onClick={() => {
                  setSelectedCategory(item?.name);
                  setActiveCategory(false);
                }}
                className="text-[15px] block cursor-pointer text-black-muted hover:text-primary-base duration-150 capitalize"
                key={index}
              >
                {item?.name}
              </Link>
            ))}
          </ul>
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
