"use client";
import { removeAuthToken } from "@/utils/authCookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaFileAlt,
  FaDownload,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AccountLayout = ({ children }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const menuItems = [
    { name: "Dashboard", path: "/account", icon: null },
    { name: "Orders", path: "/account/orders", icon: <FaFileAlt /> },
    {
      name: "Addresses",
      path: "/account/edit-address",
      icon: <FaMapMarkerAlt />,
    },
    {
      name: "Account details",
      path: "/account/edit-account",
      icon: <FaUser />,
    },
    { name: "Wishlist", path: "/account/wishlist", icon: <FaHeart /> },
  ];

  const handleLogout = () => {
    removeAuthToken();
    router.push("/login");
    toast.success("Logout successfully")
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">
          My Account
        </h1>
        <div className="flex justify-center gap-2">
          <Link href={"/account"} className="text-gray-300">
            Home
          </Link>
          {""}/<p className="font-bold">My Account</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-4"
          >
            <span className="font-semibold text-gray-900">Menu</span>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Sidebar */}
          <div
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } lg:block w-full lg:w-64 shrink-0`}
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-4 sm:px-6 py-3 sm:py-4">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  ACCOUNT
                </h2>
              </div>
              <nav className="p-2">
                {menuItems?.map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors cursor-pointer flex items-center gap-3 ${
                      pathname === item.path
                        ? "bg-primary-muted text-gray-900 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.icon && (
                      <span className="text-gray-500">{item.icon}</span>
                    )}
                    <span className="text-sm sm:text-base">{item.name}</span>
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors cursor-pointer flex items-center gap-3 text-gray-700 hover:bg-gray-50
                     `}
                >
                  <FaSignOutAlt className="text-gray-500" />
                  <span className="text-sm sm:text-base">Logout</span>
                </button>
              </nav>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
