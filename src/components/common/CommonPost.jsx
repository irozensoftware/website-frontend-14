import { blogPosts } from "@/utils/db/blogs_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
 const categories = [
    "Beauty and Personal Care",
    "Cooking Tips",
    "Home and Garden",
    "Parenting",
  ];
const CommonPost = () => {
  return (
    <>
    <aside className="">
            {/* Categories */}
            <div className="border-b border-gray-200 pb-2">
              <h3 className="text-base font-medium text-black-base mb-2 flex items-center gap-2">
                CATEGORIES
              </h3>
              <ul className="space-y-1">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="block rounded-lg text-black-muted transition group"
                    >
                      <span className="flex items-center gap-3">
                        {category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
      <div className="py-4">
        <h3 className="text-base font-semibold text-black-muted mb-4">
          Recent Posts
        </h3>
        <div className="space-y-6">
          {blogPosts?.slice(0, 4)?.map((post, index) => (
            <div
              key={index}
              className="pb-6 flex items-center gap-2  border-b border-gray-100 last:border-0 last:pb-0"
            >
              <Image
                src={post?.image}
                alt={post?.title}
                width={80}
                height={80}
                className="object-contain rounded-md w-25 h-25"
              />
              <div>
                <h4 className="font-bold text-gray-900 mb-2 hover:text-amber-600 transition">
                  <a href="#">{post?.title}</a>
                </h4>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-xs" />
                    September 18, 2025
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </aside>
    </>
  );
};

export default CommonPost;
