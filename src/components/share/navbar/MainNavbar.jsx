"use client";
import React, { useState } from "react";
import NavbarTopMassage from "./NavbarTopMassage";
import Image from "next/image";
import { FaBars, FaCodeCompare } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";

import NavbarSearch from "./NavbarSearch";
import NavLink from "./NavLink";
import ResponsiveSidebar from "../responsiveSidebar/ResponsiveSidebar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleShopCardDrawer } from "@/redux/features/toggleSlice";
import { FaChevronDown, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const MainNavbar = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const { selectedItems } = useSelector((status) => status.carts);
  const dispatch = useDispatch();
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
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span>
              </div>
              <div
                onClick={() => dispatch(toggleShopCardDrawer())}
                className="relative cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <FaCodeCompare className="text-[22px]" />
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span>
              </div>
              <div
                onClick={() => dispatch(toggleShopCardDrawer())}
                className="relative cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <CgShoppingCart className="text-[22px]" />
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-200">
          {/* TOP NAV */}
          <header className="container">
            <div className="max-w-7xl mx-auto flex items-center justify-between ">
              <div className="flex items-center gap-6">
                <div className="flex bg-primary-base items-center gap-2 text-white py-3 px-5 font-medium cursor-pointer">
                  <FaBars />
                  <span>BROWSE CATEGORIES</span>
                  <FaChevronDown className="text-xs" />
                </div>

                <nav className="hidden md:flex gap-6 text-sm font-medium">
                  <Link href={"/"} className="text-orange-500">
                    HOME
                  </Link>
                  <Link href={"/"} className="hover:text-orange-500">
                    SHOP
                  </Link>
                  <Link href={"/"} className="hover:text-orange-500">
                    BLOG & ARTICLES
                  </Link>
                  <Link href={"/"} className="hover:text-orange-500">
                    ORDERS TRACKING
                  </Link>
                  <Link href={"/"} className="hover:text-orange-500">
                    NEW ARRIVALS
                  </Link>
                  <Link href={"/"} className="hover:text-orange-500">
                    PACKAGING
                  </Link>
                  <a className="hover:text-orange-500">CONTACT US</a>
                </nav>
              </div>

              <div className="flex items-center gap-4 text-gray-700"></div>
            </div>
          </header>
        </div>
      </div>
       {/* HERO SECTION */}
        <section className="container">
          {/* CATEGORY SIDEBAR */}
          <div className="flex gap-5">
            <div>
              <aside className="border-x border-gray-200 w-61">
                <ul className="divide-y text-sm">
                  {[
                    "Home",
                    "Bags & Baggage",
                    "Home & Kitchen",
                    "Personal Care",
                    "Pet Supplies",
                    "Toys & Gaming",
                    "Bathroom Accessories",
                    "Car Accessories",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-3  font-medium border-b hover:bg-gray-200 border-gray-200 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {/* HERO CONTENT */}
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 mt-10">
              <div>
                <p className="text-primary-base text-base md:text-xl font-medium">Car Mobile Holder</p>
                <h1 className="text-xl md:text-6xl text-black font-bold leading-tight mt-2">
                  PERFORMANCE
                  <br /> WONDERFUL
                </h1>
                <p className="text-black-muted mt-4">
                  You Can Use For All Vehicles
                </p>
               <div className="mt-6">
                 <Link href={'/'} className=" bg-primary-base 
                 opacity-90
                 hover:opacity-100 text-white px-6 py-3 rounded-full text-sm">
                  BUY NOW
                </Link>
               </div>
              </div>

              <div className="flex justify-center pt-4">
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
      <ResponsiveSidebar
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />
    </>
  );
};

export default MainNavbar;
