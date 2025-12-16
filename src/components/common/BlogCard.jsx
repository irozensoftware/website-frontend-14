import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="max-w-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-b-sm overflow-hidden">
        <div className="max-h-62.5 relative group ">
          {/* Date Badge */}
          <div className="absolute  left-3 top-3 z-50 bg-white text-center text-black-muted shadow-lg px-[6px] py-1 font-semibold">
            <p className="text-sm md:text-base">{blog?.date}</p>
            <p className="text-sm">{blog?.month}</p>
          </div>

          {/* Image */}
          <div className="relative h-full overflow-hidden">
            <Image
              src={blog?.image}
              alt={blog?.title}
              width={300}
              height={200}
              layout="responsive"
              className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="absolute -bottom-5 z-50 flex justify-center w-full items-center">
            <p className="text-xs md:text-sm font-bold uppercase bg-primary-base text-white px-2 text-center py-1">
              {blog?.category}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pt-5 text-center">
          <Link href={'/blog/2'} className="mt-5 block text-sm md:text-base font-medium md:font-semibold text-black-base hover:text-black-muted duration-200 cursor-pointer">
            {blog?.title}
          </Link>
          <div className="flex items-center justify-center text-black-muted text-sm py-2 gap-2">
            <p>Posted by </p>
            <FaRegCircleUser className={"text-[16px]"} />
            <p>Web Editor </p>
            <Link href={"/"}>
              <FaRegCommentDots className={"text-[16px]"} />
            </Link>
            <Link href={"/"}>
              <CiShare2 className={"text-[16px]"} />
            </Link>
          </div>
          <p className="text-xs md:text-sm text-black-muted mt-1">
            {blog?.description}
          </p>
          <button className="mt-4 text-primary-base text-sm flex items-center justify-center gap-2  w-full uppercase md:text-base  font-medium ">
            <span>Continue Reading</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
