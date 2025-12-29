"use client";
import {
  useGetAllBlogCategoryQuery,
  useGetBlogsQuery,
} from "@/redux/api/commonApi";
import { blogPosts } from "@/utils/db/blogs_data";
import moment from "moment";
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
  const { data: blogs } = useGetBlogsQuery({ limit: 5 });
  const { data: categoriesData } = useGetAllBlogCategoryQuery();
  return (
    <>
      <aside className="">
        {/* Categories */}
        <div className="border-b border-gray-200 pb-2">
          <h3 className="text-base font-medium text-black-base mb-2 flex items-center gap-2">
            CATEGORIES
          </h3>
          <ul className="space-y-1">
            {categoriesData?.data.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/category/${category?.slug}`}
                  className="block rounded-lg text-black-muted transition group"
                >
                  <span className="flex items-center gap-3">
                    {category?.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
         <div className="py-4">
              <h3 className="text-base font-semibold text-black-muted mb-4">
                RECENT POSTS
              </h3>
              <div className="space-y-6">
                {blogs?.data?.data?.slice(0, 4)?.map((post, index) => (
                  <div
                    key={index}
                    className="pb-6 flex items-start gap-2  border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="w-25 h-20">
                      <Image
                        src={
                          `${process.env.NEXT_PUBLIC_API_URL}/storage/` +
                          post?.image
                        }
                        alt={post?.title}
                        width={100}
                        height={100}
                        className="object-cover rounded-md w-25 h-20"
                      />
                    </div>
                    <div className="w-fit">
                      <Link
                        href={`/blog/${post?.slug}`}
                        className="font-bold text-gray-900 mb-2 hover:text-amber-600 transition"
                      >
                        {post?.title}
                      </Link>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          {moment(post?.create_at).format("MMM DD, YYYY")}
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
