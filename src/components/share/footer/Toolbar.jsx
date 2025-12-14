import React from "react";
import { CiShop } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

const Toolbar = () => {
  return (
    <div className="h-[80px] lg:hidden">
      <div className="fixed bottom-0 w-full bg-white py-3 px-2 sm:px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex items-center justify-around">
          {/* shop menu  */}
          <div className="flex justify-center flex-col items-center gap-1">
            <CiShop className="text-base" />
            <p className="text-[11px] font-medium">Shop</p>
          </div>
           {/* Filter menu  */}
          <div className="flex justify-center flex-col items-center gap-1">
            <CiFilter className="text-sm" />
            <p className="text-[11px] font-medium">Filter</p>
          </div>
            {/* wishlist menu  */}
          <div className="flex justify-center flex-col items-center gap-1">
            <button className="relative text-black-base duration-200">
              <FaRegHeart className="text-[16px]" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-primary-base text-white rounded-full px-1">
                4
              </span>
            </button>
            <p className="text-[11px] font-medium">Wishlist</p>
          </div>
           {/* card menu  */}
          <div className="flex justify-center flex-col items-center gap-1">
            <MdOutlineShoppingBag className="text-sm" />
            <p className="text-[11px] font-medium">Card</p>
          </div>
           {/* account menu  */}
          <div className="flex justify-center flex-col items-center gap-1">
            <FaUserFriends className="text-sm" />
            <p className="text-[11px] font-medium">Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
