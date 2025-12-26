"use client";
import { useGetBlogBySlugQuery } from "@/redux/api/commonApi";
import { blogPosts } from "@/utils/db/blogs_data";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaComment,
  FaShareAlt,
  FaUser,
  FaBookmark,
  FaHeart,
} from "react-icons/fa";

export default function BlogPost({slug}) {


   const {data}=useGetBlogBySlugQuery(slug)
  console.log("Slug received in BlogDetails:", slug)
  console.log("Slug received in BlogDetails:", data)
  const categories = [
    "Beauty and Personal Care",
    "Cooking Tips",
    "Home and Garden",
    "Parenting",
  ];

  return (
    <div className="min-h-screen mt-10">
      <div className="container">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Essential Kitchen Gadgets Every Home Chef Needs
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              Posted by{" "}
              <span className="font-semibold text-gray-800">Chef's Corner</span>
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" />
              On September 18, 2025
            </span>
            <span className="flex items-center gap-2">
              <FaComment className="text-gray-500" />
              <span className="font-medium">No Comments</span>
            </span>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 pb-10">
          {/* Main Content */}
          <main className="lg:w-2/3">
            <div className=" rounded-2xl">
              {/* Featured Image Placeholder */}
              <div className="mb-8">
                <div className="w-full h-64 md:h-80 bg-linear-to-r from-amber-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">👨‍🍳</div>
                    <p className="text-gray-700 font-medium">
                      Featured Kitchen Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  As a home chef, having the right tools in your kitchen can
                  make the difference between a stressful cooking experience and
                  a joyful culinary adventure. From precision knives to
                  versatile appliances, the right gadgets can elevate your
                  cooking to restaurant-quality levels.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Quality Kitchen Tools Matter
                </h2>
                <p className="mb-6">
                  Investing in high-quality kitchen gadgets isn't just about
                  convenience—it's about efficiency, safety, and achieving
                  better results. The right tools can help you prep faster, cook
                  more evenly, and present your dishes beautifully.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Must-Have Gadgets
                </h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li>Precision Digital Kitchen Scale</li>
                  <li>High-Speed Immersion Blender</li>
                  <li>Multi-Function Food Processor</li>
                  <li>Professional Chef's Knife Set</li>
                  <li>Instant-Read Thermometer</li>
                  <li>Silicone Baking Mats</li>
                  <li>Mandoline Slicer</li>
                  <li>Herb Stripper and Mincer</li>
                </ul>

                {/* Interactive Elements */}
                <div className="flex flex-wrap items-center justify-between pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                      <FaHeart className="text-red-500" />
                      <span className="font-medium">Like</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                      <FaBookmark className="text-amber-500" />
                      <span className="font-medium">Save</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                      <FaShareAlt className="text-blue-500" />
                      <span className="font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
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

            {/* Recent Posts */}
            <div className="py-4">
              <h3 className="text-base font-semibold text-black-muted mb-4">
                RECENT POSTS
              </h3>
              <div className="space-y-6">
                {blogPosts?.slice(0,4)?.map((post, index) => (
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
                        <span className="flex items-center gap-1">
                          <FaComment className="text-xs" />
                          No Comment
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
