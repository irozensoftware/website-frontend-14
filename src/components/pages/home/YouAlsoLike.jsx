"use client";

import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductCard from "@/components/common/ProductCard";
import { useGetAllFeatruesQuery, useGetProductByFeatrueCategoryQuery } from "@/redux/api/commonApi";

export default function YouAlsoLike() {
  const { data: featuresData } = useGetAllFeatruesQuery();

  const [searchValue, setSearchValue] = useState({
    category_id: "",
    page: 1,
    limit: 8,
  });
  const [activeTab, setActiveTab] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const { data: productsData, isLoading } = useGetProductByFeatrueCategoryQuery(searchValue);

  // Set the first feature as active on mount
  useEffect(() => {
    if (featuresData?.data?.length > 0 && !activeTab) {
      handleActiveTab(featuresData.data[0].id);
    }
  }, [featuresData]);

  const handleActiveTab = (tabId) => {
    setActiveTab(tabId);
    setSearchValue({ ...searchValue, category_id: tabId, page: 1 }); // reset to first page
  };

  const handlePrevPage = () => {
    if (productsData?.data?.current_page > 1) {
      setSearchValue({ ...searchValue, page: productsData.data.current_page - 1 });
    }
  };

  const handleNextPage = () => {
    if (productsData?.data?.current_page < productsData.data.last_page) {
      setSearchValue({ ...searchValue, page: productsData.data.current_page + 1 });
    }
  };

  return (
    <section className="container py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b-2 border-gray-300">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semibold relative pb-2">
            YOU ALSO LIKE
            <span className="absolute left-0 -bottom-px h-0.5 w-full bg-primary-base"></span>
          </h2>

          {/* Desktop Tabs */}
          <div className="hidden md:flex gap-4 text-sm">
            {featuresData?.data?.map((item) => (
              <button
                key={item.id}
                onClick={() => handleActiveTab(item.id)}
                className={`pb-1 font-medium cursor-pointer transition ${
                  activeTab === item.id
                    ? "text-primary-base"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pagination Arrows */}
        <div className="flex gap-2 text-gray-400">
          <button
            className={`hover:text-black cursor-pointer ${productsData?.data?.current_page === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
            onClick={handlePrevPage}
            disabled={productsData?.data?.current_page === 1}
          >
            <BsChevronLeft size={22} />
          </button>
          <button
            className={`hover:text-black cursor-pointer ${productsData?.data?.current_page === productsData?.data?.last_page ? "opacity-40 cursor-not-allowed" : ""}`}
            onClick={handleNextPage}
            disabled={productsData?.data?.current_page === productsData?.data?.last_page}
          >
            <BsChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="md:hidden flex gap-4 text-sm">
        {featuresData?.data?.map((item) => (
          <button
            key={item.id}
            onClick={() => handleActiveTab(item.id)}
            className={`pb-1 font-medium transition ${
              activeTab === item.id
                ? "text-primary-base"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          productsData?.data?.data?.map((product, index) => (
            <ProductCard
              key={product.id || index}
              product={product?.product}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))
        )}
      </div>
    </section>
  );
}
