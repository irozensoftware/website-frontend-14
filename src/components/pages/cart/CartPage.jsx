"use client";
import { updatedQuantity } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { FaBackspace } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const pathName = usePathname();
  const { products } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  // Dynamic shipping
  const [shipping, setShipping] = useState(50); // default Inside Dhaka

  const subtotal = useMemo(() => {
    return products?.reduce(
      (sum, item) => sum + item.newPrice * item.quantities,
      0
    );
  }, [products]);

  const total = subtotal + shipping;
  return (
    <>
      <div className="bg-black py-8 text-white space-y-3 px-2 text-center">
        <div className="text-xl flex justify-center items-center gap-5">
          <Link
            href={`/cart`}
            className={`${
              pathName == "/cart"
                ? "border-b-2 border-primary-base "
                : "text-[#b6b6b6]"
            }  uppercase text-xl   font-semibold`}
          >
            Shopping cart
          </Link>{" "}
          <MdOutlineArrowRightAlt className="text-[25px]" />
          <Link
            href={`/checkout`}
            className={`${
              pathName == "/checkout"
                ? "border-b-2 border-primary-base "
                : "text-[#b6b6b6]"
            }  uppercase text-xl   font-semibold`}
          >
            Checkout
          </Link>{" "}
          <MdOutlineArrowRightAlt className="text-[25px]" />
          <Link
            href={`/order-complete`}
            className={`${
              pathName == "/order-complete"
                ? "border-b-2 border-primary-base "
                : "text-[#b6b6b6]"
            }  uppercase text-xl   font-semibold`}
          >
            Order complete
          </Link>{" "}
        </div>
      </div>
      <div className="container py-10">
        <h1 className="text-2xl text-center text-black-muted font-semibold mb-4">
          SHOPPING CART
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {products?.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded relative"
              >
                <button
                  onClick={() => dispatch(removeFromCart(item?.id))}
                  className="absolute right-2 top-1"
                >
                  <IoMdClose className="text-xl text-red-500" />
                </button>

                <div className="flex items-center gap-4">
                  <Image
                    src={item.image1}
                    alt={item?.title}
                    width={250}
                    height={250}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-medium text-black-base">
                      {item?.title}
                    </h2>
                    <p className="text-black-muted text-xs">
                      {item?.newPrice} ৳
                    </p>
                    <p className="text-[#159758] text-sm md:text-base font-semibold">
                      {item?.newPrice * item?.quantities} ৳
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() =>
                      dispatch(
                        updatedQuantity({ id: item?.id, type: "decrement" })
                      )
                    }
                    disabled={item?.quantities == 1}
                    className="hover:bg-[#159758] hover:border-[#159758] hover:text-white text-black-muted border border-black-muted px-2 cursor-pointer py-1 text-2xl"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item?.quantities}
                    min={1}
                    className="w-10 text-center py-2 outline-0 border-t border-b border-black-base no-spinner"
                    readOnly
                  />
                  <button
                    onClick={() =>
                      dispatch(
                        updatedQuantity({ id: item?.id, type: "increment" })
                      )
                    }
                    className="hover:bg-[#159758] hover:border-[#159758] hover:text-white text-black-muted border border-black-muted cursor-pointer px-2 py-1 text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="border rounded p-6">
              <h2 className="text-xl font-semibold mb-4">CART TOTALS</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-sm border-b pb-3 border-gray-200 md:text-base">
                  <span>Subtotal</span>
                  <span>{100} ৳</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between border-b pb-3 border-gray-200">
                  <span className="text-sm md:text-base">Shipping</span>
                  <div className="text-sm space-y-1">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        checked={100 === 50}
                      />
                      Inside Dhaka: 50 ৳
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        checked={100 === 80}
                      />
                      Outside Dhaka: 80 ৳
                    </label>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>000 ৳</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-primary-base hover:opacity-90 duration-200 text-white py-3 rounded">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
