"use client";
import React, { useState } from "react";
import NavbarTopMassage from "./NavbarTopMassage";
import Image from "next/image";
import { FaBars, FaCodeCompare } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import NavbarSearch from "./NavbarSearch";
import ResponsiveSidebar from "../responsiveSidebar/ResponsiveSidebar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleShopCardDrawer } from "@/redux/features/toggleSlice";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { menuDB } from "@/utils/db/menuDB";
import { usePathname } from "next/navigation";
import { useGetAllCategoryQuery } from "@/redux/api/commonApi";

const MainNavbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const { selectedItems } = useSelector((status) => status.carts);
  const dispatch = useDispatch();
  const path = usePathname();
   const {data:allCategory}=useGetAllCategoryQuery();
  
  return (
    <>
      <NavbarTopMassage />
      <div className="bg-white  w-full top-0 sticky z-50 ">
        <div className="border-b border-gray-200">
          <div className="container  flex items-center justify-between py-4 px-6 ">
            {/* Logo */}
            <div
              onClick={() => setActiveSidebar(!activeSidebar)}
              className="flex items-center text-black-base lg:hidden"
            >
              <FaBars className="text-[18px]" />
            </div>
            <Link href={"/"} className="flex items-center">
              <Image
                src="https://mukitalillc.com/wp-content/uploads/2025/09/rigato-10.png" // Replace with your logo path
                alt="Falaq Food"
                width={150}
                height={150}
                className="  w-30 lg:w-52  object-contain"
              />
            </Link>

            {/* Navigation Links */}

            {/* Search Bar */}

            <div className="hidden lg:block">
              <NavbarSearch />
            </div>
            {/* Action Icons */}
            <div className="flex items-center space-x-6 text-black-base">
              <Link
                href={"/login"}
                className="hidden lg:block   hover:text-black-base uppercase font-medium text-black-muted duration-200"
              >
                <p>Login/Register</p>
              </Link>

              <div
                onClick={() => dispatch(toggleShopCardDrawer())}
                className="relative cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <FaRegHeart className="text-[22px]" />
                {/* <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span> */}
              </div>
              {/* <div
                onClick={() => dispatch(toggleShopCardDrawer())}
                className="relative hidden md:block cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <FaCodeCompare className="text-[22px]" />
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span>
              </div>
              <Link href={'/cart'}
                onClick={() => dispatch(toggleShopCardDrawer())}
                className="relative hidden md:block cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <CgShoppingCart className="text-[22px]" />
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span>
              </Link> */}
            </div>
          </div>
        </div>
        <div className=" hidden md:block border-b border-gray-200">
          <header className="container">
            <div className="max-w-7xl mx-auto flex items-center justify-between ">
              <div className="flex items-center gap-6">
                <div className="group relative">
                  <div className="flex bg-primary-base items-center gap-2 text-white py-3 px-5 font-medium cursor-pointer">
                    <FaBars />
                    <span>BROWSE CATEGORIES</span>
                    <FaChevronDown className="text-xs" />
                  </div>
                  {path !== "/" && (
                    <aside className="absolute top-full left-0 w-full border-x border-gray-200 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                      <ul className="divide-y text-sm">
                        {allCategory?.data?.map((item,index) => (
                          <Link href={`/product-category/${item?.slug}`} 
                            key={index}
                            className="px-4 block py-3 font-medium border-b hover:bg-gray-100 border-gray-200 cursor-pointer"
                          >
                            {item?.name}
                          </Link>
                        ))}
                      </ul>
                    </aside>
                  )}
                </div>
                <nav className="hidden md:flex gap-3 lg:gap-6 text-[12px] lg:text-sm font-medium">
                  {menuDB?.map((item, index) => (
                    <Link
                      key={index}
                      href={item?.path}
                      className={`${
                        path == item?.path ? "text-primary-base" : "text-black"
                      } hover:text-primary-base  uppercase `}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-4 text-gray-700"></div>
            </div>
          </header>
        </div>
      </div>
      {/* HERO SECTION */}
      {path == "/" && (
        <section className="container">
          {/* CATEGORY SIDEBAR */}
          <div className="flex gap-5">
            <div className=" hidden md:block">
              <aside className="border-x border-gray-200 w-61">
                <ul className="divide-y text-sm">
                  {allCategory?.data?.map((item,index) => (
                     <Link href={`/product-category/${item?.slug}`}
                      key={index}
                      className="px-4 py-3  font-medium border-b hover:bg-gray-200 block border-gray-200 cursor-pointer"
                    >
                      {item?.name}
                    </Link>
                  ))}
                </ul>
              </aside>
            </div>
            {/* HERO CONTENT */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 mt-10">
              <div className="order-2 md:order-1">
                <p className="text-primary-base text-base md:text-xl font-medium">
                  Car Mobile Holder
                </p>
                <h1 className="text-xl md:text-6xl text-black font-bold leading-tight mt-2">
                  PERFORMANCE
                  <br /> WONDERFUL
                </h1>
                <p className="text-black-muted mt-4">
                  You Can Use For All Vehicles
                </p>
                <div className="mt-6">
                  <Link
                    href={"/"}
                    className="bg-primary-base opacity-90 hover:opacity-100 text-white px-6 py-3 rounded-full text-sm"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center pt-4">
                <Image
                  src="https://www.gadstyle.com/wp-content/uploads/2022/09/baseus-car-mobile-holder-stable-gravitational-car-mount-air-outlet-mobile-phone-holder-brac-1.webp"
                  alt="Car Mobile Holder"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <ResponsiveSidebar
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
    </>
  );
};

export default MainNavbar;
