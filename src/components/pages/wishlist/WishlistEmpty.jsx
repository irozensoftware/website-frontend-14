import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

export default function WishlistEmpty() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      {/* Icon */}
      <div className="mb-6">
        <FaRegHeart className="text-gray-300 text-7xl" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        This wishlist is empty.
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-8">
        {`You don't have any products in the wishlist yet. You will find a lot of
        interesting products on our`} <span className="font-medium">Shop</span> page.
      </p>

      {/* Button */}
      <Link
        href="/shop" // use href="/shop" for Next.js
        className="inline-block bg-primary-base hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
      >
        RETURN TO SHOP
      </Link>
    </div>
  );
}
