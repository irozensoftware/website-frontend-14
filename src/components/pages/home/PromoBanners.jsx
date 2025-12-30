"use client";
import { useGetMarketingProductQuery } from "@/redux/api/orderApi";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanners() {
  const {data, error}=useGetMarketingProductQuery()
  const marketingProduct=data?.data;
  console.log(marketingProduct,'marketingProduct')
  console.log(error,'error')

  return (
    <section className="container px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          marketingProduct?.map((item,index)=> <div key={index} className="relative overflow-hidden rounded-xl bg-linear-to-r from-[#e36f175b] to-[#3a16003b]  min-h-65 flex items-center">
          <div className="pl-8 z-10">
            <p className="text-primary-base tracking-wider  uppercase text-sm font-semibold mb-2">
              {item?.name}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-black-base">
              {item?.category?.name}
            </h2>
            <p className="text-black-muted mt-2 mb-5">
               {item?.title}
            </p>
            <Link
              href={`/product-category/${item?.category?.slug}`}
              className="inline-block bg-primary-base text-white text-sm font-medium px-5 py-2 hover:opacity-70 rounded-full  transition"
            >
              SHOP MORE
            </Link>
          </div>

          <div className="absolute right-6 bottom-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/`+item?.image}
              alt="Bag"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>)
        }
        {/* Left Banner */}
      
      </div>
    </section>
  );
}
