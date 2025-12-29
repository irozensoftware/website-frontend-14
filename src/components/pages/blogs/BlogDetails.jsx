"use client";
import {
  useGetAllBlogCategoryQuery,
  useGetBlogBySlugQuery,
  useGetBlogsQuery,
} from "@/redux/api/commonApi";
import moment from "moment";
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

export default function BlogPost({ slug }) {
  const { data: blogs } = useGetBlogsQuery({ limit: 5 });
  const { data } = useGetBlogBySlugQuery(slug);
  const { data: categoriesData } = useGetAllBlogCategoryQuery();
  const blog = data?.data;

  return (
    <div className="min-h-screen mt-10">
      <div className="container">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
            {blog?.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              Posted by{" "}
              <span className="font-semibold text-gray-800">Web Editor</span>
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" />
              On {moment(blog?.create_at).format("MMM mm, yyyy")}
            </span>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 pb-10">
          {/* Main Content */}
          <main className="lg:w-2/3">
            <div className=" rounded-2xl">
              {/* Featured Image Placeholder */}
              <div className="mb-8">
                <div className="w-full h-64 md:h-112.5 bg-linear-to-r from-amber-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <Image
                    src={
                      `${process.env.NEXT_PUBLIC_API_URL}/storage/` +
                      blog?.image
                    }
                    alt={blog?.title}
                    width={800}
                    height={400}
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
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

            {/* Recent Posts */}
            <div className="py-4">
              <h3 className="text-base font-semibold text-black-muted mb-4">
                RECENT POSTS
              </h3>
              <div className="space-y-6">
                {blogs?.data?.data?.slice(0, 4)?.map((post, index) => (
                  <div
                    key={index}
                    className="pb-6 flex items-center gap-2  border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div className="w-25">
                      <Image
                        src={
                          `${process.env.NEXT_PUBLIC_API_URL}/storage/` +
                          post?.image
                        }
                        alt={post?.title}
                        width={80}
                        height={80}
                        className="object-cover rounded-md w-full h-20"
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
        </div>
      </div>
    </div>
  );
}
