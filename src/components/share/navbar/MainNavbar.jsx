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
import { usePathname, useRouter } from "next/navigation";
import {
  useGetAllCategoryQuery,
  useGetBannerQuery,
} from "@/redux/api/commonApi";
import { useGetProfileQuery } from "@/redux/api/authApi";
import { useGetAboutUsQuery } from "@/redux/api/orderApi";
import { emptyImage } from "@/utils/image";
import { removeAuthToken } from "@/utils/authCookie";
import toast from "react-hot-toast";

const MainNavbar = () => {
  const { data } = useGetBannerQuery();
  const banner = data?.data;
  console.log(banner,'banner')
  const { data: aboutInfoData } = useGetAboutUsQuery();
  const aboutInfo=aboutInfoData;
  const { data: profileData } = useGetProfileQuery();
  const product = banner?.product;
  const [activeSidebar, setActiveSidebar] = useState(false);
  const { selectedItems, totalPrice } = useSelector((status) => status.carts);
  const { wish_products } = useSelector((status) => status.wishlist);
  const dispatch = useDispatch();
  const path = usePathname();
  const { data: allCategory } = useGetAllCategoryQuery();
   const router = useRouter()
  const handleLogout = () => {
    removeAuthToken();
    router.replace("/login");
    toast.success("Logout successfully")
  };

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
                src={
                  aboutInfo?.data?.navbar_logo
                    ? `${process.env.NEXT_PUBLIC_API_URL}/storage/images/${aboutInfo.data.navbar_logo}`
                    : emptyImage
                }
                alt="Logo"
                width={150}
                height={60}
                className="w-30  max-h-15 lg:w-52 object-contain"
              />
            </Link>

            {/* Navigation Links */}

            {/* Search Bar */}

            <div className="hidden lg:block">
              <NavbarSearch />
            </div>
            {/* Action Icons */}
            <div className="flex items-center   group space-x-4 text-black-base">
              {profileData?.email ? (
                <div className="relative">
                  {" "}
                  <Link
                    href={"/account"}
                    className="hidden lg:block text-sm  hover:text-black-base uppercase font-medium text-black-muted duration-200"
                  >
                    <p>My Account</p>
                  </Link>
                  <div
                    className="
                  absolute left-0 top-full mt-2 w-48
                  bg-white border border-gray-200 shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                  z-50
                "
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <Link
                          href="/account"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/account/orders"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Orders
                        </Link>
                      </li>
                      
                      <li>
                        <Link
                          href="/account/edit-address"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Addresses
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/account/edit-account"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Account details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/wishlist"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Wishlist
                        </Link>
                      </li>

                      <li className="border-t border-gray-200 mt-2">
                        <button
                          onClick={()=>handleLogout()}
                          className="w-full cursor-pointer text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="hidden lg:block text-sm  hover:text-black-base uppercase font-medium text-black-muted duration-200"
                >
                  <p>Login/Register</p>
                </Link>
              )}

              <Link
                href={"/wishlist"}
                className="relative cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <FaRegHeart className="text-[18px]" />
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {wish_products?.length}
                </span>
              </Link>

              <Link
                href={"/cart"}
                onClick={() => dispatch(toggleShopCardDrawer())}
                className="relative hidden md:block cursor-pointer  text-black-base hover:text-black-muted duration-200"
              >
                <CgShoppingCart className="text-[18px]" />
                <span className="absolute -top-1 -right-1 bg-primary-base text-white text-[10px] rounded-full px-1">
                  {selectedItems}
                </span>
              </Link>
              <p className="hover:text-black-muted cursor-pointer">
                ${totalPrice}
              </p>
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
                        {allCategory?.data?.map((item, index) => (
                          <Link
                            href={`/product-category/${item?.slug}`}
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
                  {allCategory?.data?.map((item, index) => (
                    <Link
                      href={`/product-category/${item?.slug}`}
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
                  {product?.category?.name}
                </p>
                <h1 className="text-xl md:text-6xl text-black font-bold leading-tight mt-2">
                  {product?.name}
                </h1>
                <p className="text-black-muted mt-4">{banner?.name}</p>
                <div className="mt-6">
                  <Link
                    href={`product/${product?.slug}`}
                    className="bg-primary-base opacity-90 hover:opacity-100 text-white px-6 py-3 rounded-full text-sm"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center pt-4">
                <Image
                  src={
                    product?.primary_image?.image
                      ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${product.primary_image.image}`
                      : "/placeholder.png"
                  }
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
