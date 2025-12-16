import Link from "next/link";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ProductHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-start gap-2">
        <p className="space-x-1 text-black-muted">
          {" "}
          <Link href={"/"} className="">
            Home
          </Link>{" "}
          / <span> Category</span> /{" "}
          <Link href={"/"} className="text-black-base">
            কালোজিরা ফুলের মধু
          </Link>{" "}
        </p>
        <div className="flex items-center gap-1 text-black-muted">
          <Link href={"/"}>
            <FaChevronLeft className="text-base" />
          </Link>
          <LuLayoutDashboard className="text-lg" />
          <Link href={"/"}>
            <FaChevronRight className="text-base" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
