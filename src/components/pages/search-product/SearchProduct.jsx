"use client";

import Loader from "@/components/common/Loader";
import ProductCardShop from "@/components/common/ProductCardShop";
import { useGetSearchProductQuery } from "@/redux/api/orderApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsFillGrid3X3GapFill, BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [activeIndex, setActiveIndex] = useState(null); // To manage hover state
  const [activeGrid, setActiveGrid] = useState("4");
  const { data, isLoading, isFetching } = useGetSearchProductQuery(
    { search },
    {
      skip: !search, // ✅ search না থাকলে query skip
    }
  );

 if (!search) {
    return (
      <div className="p-6 text-center text-gray-500">
        Please search for a product
      </div>
    );
  }

  if (isLoading || isFetching) {
    return <Loader fullScreen text="Searching products..." />;
  }


  if (data?.data.length<0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No products found for “{search}”
      </div>
    );
  }

  return (
    <>
     <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">Search Product</h1>
       
      </div>
          <div className="container">
        <div className="flex items-center justify-between border-b py-4 border-gray-200">
          <div className="flex items-center text-base text-gray-600">
            <Link href={`/`} className="hover:text-black-base cursor-pointer">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={"/shop"}
              className="hover:text-black-base cursor-pointer"
            >
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-base font-medium">{search}</span>
          </div>
        </div>
        <div className="flex justify-between gap-1">
          <button className=" flex items-center gap-2 py-2   rounded-md hover:bg-primary-dark transition">
            <FaBars />
            <span className="font-medium text-black-muted">Show Sidebar</span>
          </button>
          <div className=" flex items-center gap-5">
            <div className=" hidden md:flex items-center gap-2">
              <button
                onClick={() => setActiveGrid("2")}
                className={` ${
                  activeGrid == "2" ? "opacity-100" : "opacity-60"
                }  hover:opacity-100 duration-150 text-black-base`}
              >
                <BsGrid className="text-2xl" />
              </button>
              <button
                onClick={() => setActiveGrid("3")}
                className={` ${
                  activeGrid == "3" ? "opacity-100" : "opacity-60"
                }  hover:opacity-100 duration-150 text-black-base`}
              >
                {" "}
                <BsFillGrid3X3GapFill className="text-2xl" />
              </button>
              <button
                onClick={() => setActiveGrid("4")}
                className={` ${
                  activeGrid == "4" ? "opacity-100" : "opacity-60"
                }  hover:opacity-100 duration-150 text-black-base`}
              >
                {" "}
                <TfiLayoutGrid4Alt className="text-2xl" />
              </button>
            </div>
            <div>
              <div className="w-full max-w-sm min-w-50">
                <div className="relative">
                  <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-b-2 border-slate-200 rounded pl-3 pr-8 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 appearance-none cursor-pointer">
                    <option value="brazil">Brazil</option>
                    <option value="bucharest">Bucharest</option>
                    <option value="london">London</option>
                    <option value="washington">Washington</option>
                  </select>
                  <IoIosArrowDown className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700"></IoIosArrowDown>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="py-10">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${activeGrid} gap-6`}
        >
          {data?.data?.map((product, index) => (
            <ProductCardShop
              key={index}
              product={product}
              isActive={activeIndex === index} // Pass active state
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default SearchProduct;
