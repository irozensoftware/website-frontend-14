"use client";
import { useGetBannerQuery } from "@/redux/api/commonApi";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanners() {
  const {data}=useGetBannerQuery();
  const banners=data?.data;
  const product=data?.product;
  console.log(banners,'ddddddddddd');
  console.log(product,'product');
  return (
    <section className="container px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Banner */}
        <div className="relative overflow-hidden rounded-xl bg-[#dff1ec] min-h-[260px] flex items-center">
          <div className="pl-8 z-10">
            <p className="text-primary-base text-sm font-semibold mb-2">
              LEATHER COLLECTION
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black-base">
              BAGS & BAGGAGE
            </h2>
            <p className="text-black-muted mt-2 mb-5">
              Starts Your Fashion Here
            </p>
            <Link
              href="#"
              className="inline-block bg-primary-base text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition"
            >
              SHOP MORE
            </Link>
          </div>

          <div className="absolute right-6 bottom-0">
            <Image
              src="https://i.pinimg.com/736x/18/bf/9b/18bf9b64b338f5230a135c64d2c1eed2.jpg"
              alt="Bag"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative overflow-hidden rounded-xl bg-linear-to-r from-[#e37017] to-[#3a1600] min-h-65 flex items-center">
          <div className="pl-8 z-10 text-white">
            <p className="text-sm font-semibold mb-2">KITCHEN ACCESSORIES</p>
            <h2 className="text-2xl md:text-3xl font-bold">SMART LIFE</h2>
            <p className="text-white/80 mt-2 mb-5">Smart Tools</p>
            <Link
              href="#"
              className="inline-block bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition"
            >
              SHOP MORE
            </Link>
          </div>

          <div className="absolute right-6 bottom-0">
            <Image
              src="https://png.pngtree.com/png-clipart/20250121/original/pngtree-a-functional-group-of-kitchen-utensils-ready-for-meal-preparation-and-png-image_20034684.png"
              alt="Kitchen Tools"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
