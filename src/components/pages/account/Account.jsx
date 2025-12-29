"use client";
import { useGetProfileQuery } from "@/redux/api/authApi";
import { removeAuthToken } from "@/utils/authCookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import {
  FaFileAlt,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaExclamationCircle,
} from "react-icons/fa";

const MyAccount = () => {
  const { data: profile } = useGetProfileQuery();
  console.log(profile,'profile')
  const router = useRouter();
  const dashboardCards = [
    { title: "Orders", path: "/account/orders", icon: <FaFileAlt className="w-12 h-12" /> },
    { title: "Addresses", path: "/account/edit-address",  icon: <FaMapMarkerAlt className="w-12 h-12" /> },
    { title: "Account details", path: "/account/edit-account", icon: <FaUser className="w-12 h-12" /> },
    { title: "Wishlist",path: "/account/wishlist", icon: <FaHeart className="w-12 h-12" /> },

  ];
  const handleLogout = () => {
    removeAuthToken();
    router.push("/login");
    toast.success("Logout successfully");
  };
  return (
    <div className="flex-1">
      {/* Alert Banner */}
      <div className="bg-primary-muted text-primary-base p-4 sm:p-5 rounded-lg mb-6 flex items-start gap-3">
        <FaExclamationCircle className="shrink-0 mt-0.5 text-lg sm:text-xl" />
        <p className="text-sm sm:text-base leading-relaxed">
          Your account with mukitalillc.com is using a temporary password. We
          emailed you a link to change your password.
        </p>
      </div>

      {/* Welcome Text */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-6">
        <p className="text-sm sm:text-base text-gray-700">
          Hello <span className="font-semibold">{profile?.name}</span> (not{" "}
          <span className="font-semibold">{profile?.name}</span>?{" "}
          <button
            onClick={handleLogout}
            className="text-primary-base hover:underline"
          >
            Log out
          </button>
          )
        </p>
        <p className="text-sm sm:text-base text-gray-700 mt-4">
          From your account dashboard you can view your{" "}
          <Link
            href={"/account/orders"}
            className="text-primary-base hover:underline font-medium"
          >
            recent orders
          </Link>
          , manage your{" "}
          <Link
            href={"/account/edit-address"}
            className="textprimary-base hover:underline font-medium"
          >
            shipping
          </Link>{" "}
          and{" "}
          <Link
            href={"/account/edit-address"}
            className="text-primary-base hover:underline font-medium"
          >
            billing addresses
          </Link>
          <Link href={`/account/edit-account/`}>
            , and edit your password and account details.
          </Link>
        </p>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {dashboardCards.map((card, index) => (
          <Link href={card.path}
            key={index}
            className="bg-white cursor-pointer p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-4 group"
          >
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
              {card.icon}
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900">
              {card.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
