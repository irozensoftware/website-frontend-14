"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetBlogsQuery } from "@/redux/api/commonApi";
import { useGetAboutUsQuery } from "@/redux/api/orderApi";
import { emptyImage } from "@/utils/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {data:allBlogs, error}=useGetBlogsQuery({limit:2});
   const { data: aboutInfo } = useGetAboutUsQuery();
  return (
    <footer className="bg-[#000000] text-white py-8">
      <div className="">
        {/* Main Footer Content */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex space-x-2">
                <Image
                  src={
                  aboutInfo?.data?.footer_logo
                    ? `${process.env.NEXT_PUBLIC_API_URL}/storage/images/${aboutInfo.data.footer_logo}`
                    : emptyImage
                }
                  height={150}
                  width={250}
                  alt="pay"
                ></Image>
              </div>
            </div>
            {/* RECENT POSTS Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-primary-base inline-block">
                RECENT POSTS
              </h3>
              <ul className="space-y-4">
                {allBlogs?.data?.data?.slice(0, 2)?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/${item?.slug}`}
                      className="text-gray-300 hover:text-primary-base transition-colors duration-300 flex  gap-2 items-center"
                    >
                      <div>
                        <Image
                          className="rounded w-15 h-15"
                          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/` + item?.image}
                          height={80}
                          width={80}
                          alt="pay"
                        ></Image>
                      </div>
                      <p className="flex-1">{item?.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* USEFUL LINKS Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-primary-base inline-block">
                USEFUL LINKS
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    name: "Contact Us",
                    path: "contact-us",
                  },
                  {
                    name: "About Us",
                    path: "about-us",
                  },
                  {
                    name: "Our Disclaimer",
                    path: "our-disclaimer",
                  },
                  {
                    name: "Privacy Policy",
                    path: "perivacy-policy",
                  },
                  {
                    name: "Terms-Conditions",
                    path: "terms-conditions",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${item?.path}`}
                      className="text-gray-300 hover:text-primary-base transition-colors duration-300 flex items-center group"
                    >
                      <span className="transform -rotate-45 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      <span>{item?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* HIGHLIGHTS Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-primary-base inline-block">
                HIGHLIGHTS
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    name: "Blog & Articles",
                    path: "blog",
                  },
                  {
                    name: "All Products",
                    path: "shop",
                  },
                  {
                    name: "Shipping Policy",
                    path: "shipping-policy",
                  },
                  {
                    name: "Packaging",
                    path: "packaging",
                  },
                  {
                    name: "Return & Refund",
                    path: "return-and-refund",
                  },
                ].map((item,index) => (
                  <li key={index}>
                    <Link
                      href={`/${item.path}`}
                      className="text-gray-300 hover:text-primary-base transition-colors duration-300 flex items-center group"
                    >
                      <span className="transform -rotate-45 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      <span>{item?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center mb-4 md:mb-0">
                <p className="text-gray-400">
                   All Rights @  {currentYear} {aboutInfo?.data?.name}
                </p>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <Image
                    src={
                      "https://mukitalillc.com/wp-content/themes/woodmart/images/payments.png"
                    }
                    height={150}
                    width={250}
                    alt="pay"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
