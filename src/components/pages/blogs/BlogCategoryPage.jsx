"use client";
import SecondBlogCard from '@/components/common/SecondBlogCard';
import { useGetBlogByCategoryQuery } from '@/redux/api/commonApi';
import Link from 'next/link';
import React from 'react'

const BlogCategoryPage = ({slug}) => {
    const {data}= useGetBlogByCategoryQuery(slug);
    console.log("Category Slug in BlogCategoryPage:", slug);
    console.log("Blogs in BlogCategoryPage:", data);
  return (
    <div>
       <div className="bg-black py-10 text-white space-y-3 px-2 text-center">
        <h1 className="text-xl md:text-3xl xl:text-5xl font-bold">Blog</h1>
        <div className="flex justify-center gap-2">
          <Link href={"/"} className="text-gray-300">
            Home
          </Link>{" "}
          /<p className="font-bold">{data?.category?.name}</p>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
          {data?.data?.map((blog, index) => (
            <SecondBlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogCategoryPage
