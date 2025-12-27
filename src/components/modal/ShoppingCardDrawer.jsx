"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { toggleShopCardDrawer } from "@/redux/features/toggleSlice";
import { removeFromCart } from "@/redux/features/cartSlice";
import Link from "next/link";

export default function ShoppingCartDrawer() {
  const { totalPrice, products } = useSelector((state) => state.carts);
  const { shopCartDrawerStatus } = useSelector(
    (status) => status.toggle_status
  );
  const dispatch = useDispatch();
  return (
    <>
      {/* Overlay */}
      {shopCartDrawerStatus && (
        <div
          onClick={() => dispatch(toggleShopCardDrawer())}
          className="fixed inset-0 bg-[#0c0c0c52] bg-opacity-40 z-200"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-300 transform transition-transform duration-300 ${
          shopCartDrawerStatus ? "translate-x-0" : "translate-x-full"
        } flex flex-col`} // Make drawer flex column
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <h2 className="text-lg font-medium">Shopping Cart</h2>
          <button
            className="flex items-center gap-1"
            onClick={() => dispatch(toggleShopCardDrawer())}
          >
            <IoMdClose className="w-4 h-4" />
            <p className="text-sm">Close</p>
          </button>
        </div>

        {/* Product List */}
        <div className="grow overflow-y-auto divide-y">
          {products?.length > 0 ? (
            products?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4">
                <div className="w-16 h-16 bg-gray-100 shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/`+item?.primary_image?.image}
                    width={64}
                    height={64}
                    alt={item?.name}
                    className="object-cover rounded"
                  />
                </div>
                <div className="grow">
                  <h4 className="font-semibold text-sm">{item?.name}</h4>
                  <p className="text-xs ">
                    {item?.quantities} ×{" "}
                    <span className="text-primary-base font-medium">
                     ${item.base_price?.toLocaleString()}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  className="text-gray-500 text-xl cursor-pointer hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Your cart is empty.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t shrink-0">
          <div className="flex justify-between mb-3 font-medium text-lg">
            <span>Subtotal:</span>
            <span>$ {totalPrice?.toLocaleString()} </span>
          </div>
          <Link
            href={"/cart"}
            className="w-full block  text-center bg-[#efefef] text-black-base font-medium py-2 mb-2 rounded"
          >
            VIEW CART
          </Link>
          <Link href={'/checkout'} className="w-full block text-center bg-primary-base cursor-pointer text-white font-medium py-2 rounded">
            CHECKOUT
          </Link>
        </div>
      </div>
    </>
  );
}
