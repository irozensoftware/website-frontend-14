"use client";
import React from "react";
import { CiShop } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "@/redux/api/authApi";

const Toolbar = () => {
  const { products, totalPrice } = useSelector((status) => status.carts);
  const { wish_products } = useSelector((status) => status.wishlist);
  const { data: profileData } = useGetProfileQuery();
  return (
    <div className="h-20 lg:hidden">
      <div className="fixed bottom-0 w-full bg-white py-3 px-2 sm:px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center justify-around">
          {/* shop menu  */}
          <Link
            href={"/shop"}
            className="flex justify-center flex-col items-center gap-1"
          >
            <CiShop className="text-base" />
            <p className="text-[11px] font-medium">Shop</p>
          </Link>
          {/* wishlist menu  */}
          <Link href={'/wishlist'} className="flex justify-center flex-col items-center gap-1">
            <button className="relative text-black-base duration-200">
              <FaRegHeart className="text-[16px]" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-primary-base text-white rounded-full px-1">
                {wish_products?.length || 0}
              </span>
            </button>
            <p className="text-[11px] font-medium">Wishlist</p>
          </Link>
          {/* card menu  */}
          <Link href={'cart'} className="flex justify-center flex-col items-center gap-1">
            <button className="relative text-black-base duration-200">
              <MdOutlineShoppingBag className="text-[16px]" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-primary-base text-white rounded-full px-1">
                {products?.length || 0}
              </span>
            </button>
            <p className="text-[11px] font-medium">Card</p>
          </Link>
          {/* account menu  */}
          {
            profileData?.email ?   <Link href={'/account'} className="flex justify-center flex-col items-center gap-1">
            <FaUserFriends className="text-sm" />
            <p className="text-[11px] font-medium">Account</p>
          </Link>:  <Link href={'/login'} className="flex justify-center flex-col items-center gap-1">
            <FaUserFriends className="text-sm" />
            <p className="text-[11px] font-medium">Login</p>
          </Link>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
