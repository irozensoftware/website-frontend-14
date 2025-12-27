"use client";
import { removeFromCart, updatedQuantity } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const pathName = usePathname();
  const { totalPrice, products } = useSelector((state) => state.carts);

  const dispatch = useDispatch();

  // Dynamic shipping
  const [shipping, setShipping] = useState(50); // default Inside Dhaka

  console.log("products", products);
  const subtotal = useMemo(() => {
    return products?.reduce(
      (sum, item) => sum + item?.base_price * item.quantities,
      0
    );
  }, [products]);

  const total = subtotal + 15;
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
                className="flex items-center justify-between border border-gray-200 p-4 rounded relative"
              >
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="absolute right-2 cursor-pointer top-1"
                >
                  <IoMdClose className="text-xl text-red-500" />
                </button>

                <div className="flex items-center gap-4">
                  <Image
                    src={
                      `${process.env.NEXT_PUBLIC_API_URL}/storage/` +
                      item?.primary_image?.image
                    }
                    alt={item?.name}
                    width={250}
                    height={250}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-medium text-black-base">
                      {item?.name}
                    </h2>
                    <p className="text-black-muted text-xs">
                      ${item?.base_price}
                    </p>
                    <p className="text-primary-base text-sm md:text-base font-semibold">
                      ${item?.base_price * item?.quantities}
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
                    className="hover:bg-primary-base hover:border-primary-base hover:text-white text-black-muted border border-black-muted px-2 cursor-pointer py-1 text-2xl"
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
                    className="hover:bg-primary-base hover:border-primary-base hover:text-white text-black-muted border border-black-muted cursor-pointer px-2 py-1 text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="border border-gray-200 rounded p-6">
              <h2 className="text-xl font-semibold mb-4">CART TOTALS</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-sm border-b pb-3 border-gray-200 md:text-base">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between border-b pb-3 border-gray-200">
                  <span className="text-sm md:text-base">Shipping</span>
                  <div className="text-sm space-y-1">
                    <label className="flex items-center gap-1 cursor-pointer">
                      $15:00
                    </label>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span className="text-primary-base">${total}</span>
                </div>
              </div>

              <Link
                href={"/checkout"}
                className="mt-6 block text-center w-full bg-primary-base hover:opacity-90 duration-200 text-white py-3 rounded"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
