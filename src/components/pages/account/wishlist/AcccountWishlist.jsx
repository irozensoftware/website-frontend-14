"use client";
import React, { useState } from "react";
import WishListProductCard from "../../wishlist/WishListProductCard";
import WishlistEmpty from "../../wishlist/WishlistEmpty";
import { useSelector } from "react-redux";

const AcccountWishlist = () => {
  const { wish_products } = useSelector((status) => status.wishlist);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className=" w-full">
        {wish_products?.length > 0 ? (
          <>
            <h1 className="text-base md:text-xl uppercase font-semibold">
              Your products wishlist
            </h1>
            <div
              className={`grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
            >
              {wish_products?.map((product, index) => (
                <WishListProductCard
                  key={product?.id || index}
                  product={product}
                  isActive={activeIndex === index} // Pass active state
                  onHover={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
                />
              ))}
            </div>
          </>
        ) : (
          <WishlistEmpty />
        )}
      </div>
    </>
  );
};

export default AcccountWishlist;
