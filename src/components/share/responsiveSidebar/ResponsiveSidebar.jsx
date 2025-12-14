"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";

const ResponsiveSidebar = ({ setActiveSidebar, activeSidebar }) => {
  const pathName = usePathname();
  const dropdownRef = useRef(null);
  // Close sidebar on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveSidebar(false); // Close sidebar when clicking outside
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setActiveSidebar]);

  return (
    <div>
  
      {/* Overlay */}
      {activeSidebar && (
        <div
          className={`bg-[#000000af] fixed inset-0 z-40`}
          onClick={() => setActiveSidebar(false)} // Close when clicking on overlay
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[300px] bg-white transform ${
          activeSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        ref={dropdownRef}
      >
        {/* Search Bar */}
        <div className="flex justify-between items-center gap-2 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <input
            className="w-full outline-none px-1"
            placeholder="Search Product"
            type="search"
          />
          <IoSearchOutline className="text-xl" />
        </div>

        {/* Links */}
        <div>
          <div className="mt-2">
            <Link
              href="/"
              className={` ${
                pathName == "/"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] py-3 text-sm px-3 uppercase font-medium block`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={` ${
                pathName == "/shop"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] py-3 text-sm px-3 uppercase font-medium block`}
            >
              SHOP
            </Link>
            <Link
              href="/blog"
              className={` ${
                pathName == "/blog"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] py-3 text-sm px-3 uppercase font-medium block`}
            >
              BLOG
            </Link>
            <Link
              href="/about-us"
              className={` ${
                pathName == "/about-us"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] py-3 text-sm px-3 uppercase font-medium block`}
            >
              ABOUT US
            </Link>
            <Link
              href="/contact-us"
              className={` ${
                pathName == "/contact-us"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] py-3 text-sm px-3 uppercase font-medium block`}
            >
              CONTACT US
            </Link>
           
            <Link
              href="/compare"
              className={` ${
                pathName == "/compare"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] flex items-center gap-1 py-3 text-sm px-3 uppercase font-medium`}
            >
              <IoGitCompareOutline className="text-base" />
              <span>COMPARE</span>
            </Link>
            <Link
              href="/account"
              className={` ${
                pathName == "/account"
                  ? "text-primary-base"
                  : "hover:text-primary-base text-black-base"
              } border-b border-[#35353544] flex items-center gap-1 py-3 text-sm px-3 uppercase font-medium`}
            >
              <FaUserFriends className="text-base" />
              <span>MY ACCOUNT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
