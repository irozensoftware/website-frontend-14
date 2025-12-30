"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { useGetAllCategoryQuery } from "@/redux/api/commonApi";
import { useGetProfileQuery } from "@/redux/api/authApi";

const ResponsiveSidebar = ({ setActiveSidebar, activeSidebar }) => {
  const { data: profileData } = useGetProfileQuery();

  const { data: allCategory } = useGetAllCategoryQuery();
  const pathName = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [activeTab, setActiveTab] = useState("menu");
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");
  const handleOnEnter = () => {
    if (!search.trim()) return; // empty search prevent
    router.replace(`/search-product?search=${encodeURIComponent(search)}`);
    setActiveSidebar(false);
  };
  // Close sidebar on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveSidebar(false);
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
          className="bg-[#000000af] fixed inset-0 z-40"
          onClick={() => setActiveSidebar(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-80 bg-white transform ${
          activeSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 overflow-y-auto`}
        ref={dropdownRef}
      >
        {/* Search Bar */}
        <div className="flex justify-between items-center gap-2 px-4 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnEnter();
              }
            }}
            className="w-full outline-none px-2 py-2 text-gray-700"
            placeholder="Search Product"
            type="search"
          />
          <IoSearchOutline className="text-xl text-gray-600" />
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("menu")}
            className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200 ${
              activeTab === "menu"
                ? "text-primary-base border-b-2 border-primary-base"
                : "text-gray-600 hover:text-primary-base"
            }`}
          >
            MENU
          </button>
          <button
            onClick={() => {
              setActiveTab("category");
              setActiveCategory(null);
            }}
            className={`flex-1 py-4 text-center text-sm font-medium transition-all duration-200 ${
              activeTab === "category"
                ? "text-primary-base border-b-2 border-primary-base"
                : "text-gray-600 hover:text-primary-base"
            }`}
          >
            CATEGORIES
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Categories Tab */}
          {activeTab === "category" && (
            <div className="py-2">
              {allCategory?.data?.map((category) => (
                <Link
                  onClick={() => setActiveSidebar(false)}
                  href={`/product-category/${category?.slug}`}
                  key={category.id}
                  className="border-b border-gray-100"
                >
                  <button
                    className={`flex items-center justify-between w-full px-4 py-3 text-left transition-all duration-200 ${
                      pathName === `/product-category/${category?.slug}`
                        ? "bg-gray-50 text-primary-base"
                        : "hover:bg-gray-50 text-gray-800"
                    }`}
                  >
                    <span className="font-medium">{category?.name}</span>
                  </button>
                </Link>
              ))}
            </div>
          )}

          {/* Menu Tab */}
          {activeTab === "menu" && (
            <div className="py-2">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "Blog", path: "/blog" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setActiveSidebar(false)}
                  className={`block py-3 px-4 text-sm font-medium transition-colors duration-150 ${
                    pathName === item.path
                      ? "text-primary-base bg-primary-base/5 border-l-4 border-primary-base"
                      : "text-gray-800 hover:text-primary-base hover:bg-gray-50 border-l-4 border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Special Links with Icons */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                {allCategory?.email ? (
                  <Link
                    href="/account"
                    onClick={() => setActiveSidebar(false)}
                    className={`flex items-center gap-3 py-3 px-4 text-sm font-medium transition-colors duration-150 ${
                      pathName === "/account"
                        ? "text-primary-base bg-primary-base/5 border-l-4 border-primary-base"
                        : "text-gray-800 hover:text-primary-base hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                  >
                    <FaUserFriends className="text-base" />
                    <span>My Account</span>
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setActiveSidebar(false)}
                    className={`flex items-center gap-3 py-3 px-4 text-sm font-medium transition-colors duration-150 ${
                      pathName === "/login"
                        ? "text-primary-base bg-primary-base/5 border-l-4 border-primary-base"
                        : "text-gray-800 hover:text-primary-base hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                  >
                    <FaUserFriends className="text-base" />
                    <span>Register/Login</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => setActiveSidebar(false)}
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors duration-150"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
