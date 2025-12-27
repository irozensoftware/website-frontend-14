import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import moment from "moment";

const SecondBlogCard = ({ blog }) => {

  return (
    <>
      <div className="max-w-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-b-sm overflow-hidden">
        <div className="max-h-62.5 relative group ">
          {/* Date Badge */}
          <div className="absolute  left-3 top-3 z-10 bg-white text-center text-black-muted shadow-lg px-[6px] py-1 font-semibold">
            <p className="text-sm md:text-base">
              {moment(blog?.create_at).format("DD")}
            </p>
            <p className="text-sm">{moment(blog?.create_at).format("MMM")}</p>
          </div>

          {/* Image */}
          <div className="relative h-full overflow-hidden">
            <Image
               src={`${process.env.NEXT_PUBLIC_API_URL}/storage/`+blog?.image}
              alt={blog?.title}
              width={300}
              height={200}
             className="object-cover w-full max-h-70 transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-[#00000041] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="absolute -bottom-10 z-10 flex justify-center w-full items-center">
            <p className="text-xs md:text-sm font-bold uppercase bg-primary-base text-white px-2 text-center py-1">
               {blog?.category?.name}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 mt-5 text-center">
          <Link
            href={`/blog/${blog?.slug}`}
            className="mt-5 block text-sm md:text-base font-medium md:font-semibold text-black-base hover:text-black-muted duration-200 cursor-pointer"
          >
             {blog?.title}
          </Link>
          <div className="flex items-center justify-center text-black-muted text-sm py-2 gap-2">
            <p>Posted by </p>
            <FaRegCircleUser className={"text-[16px]"} />
            <p>Web Editor </p>
         
            <Link href={"/"}>
              <CiShare2 className={"text-[16px]"} />
            </Link>
          </div>
          <div dangerouslySetInnerHTML={{__html:blog?.content?.slice(0,150)}} className="text-xs md:text-sm text-black-muted mt-1">
            
          </div>
          <Link href={`/blog/${blog?.slug}`} className="mt-4 text-primary-base text-sm flex items-center justify-center gap-2  w-full uppercase md:text-base  font-medium ">
            <span>Continue Reading</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SecondBlogCard;
