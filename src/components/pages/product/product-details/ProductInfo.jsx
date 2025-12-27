"use client";
// pages/product/[id].js
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";

import ProductHeader from "./ProductHeader";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import ProductDetailsAndReview from "./ProductDetailsAndReview";
import RelatedProducts from "./RelatedProducts";
import ProductDetailsImageSection from "./ProductDetailsImageSection";
import { toggleShopCardDrawer } from "@/redux/features/toggleSlice";
import { addToCart } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductInfo({ product, relatedProduct }) {
  const [value, setValue] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));
  const mapping_variants = product?.mapping_variants || [];
 const dispatch = useDispatch();
  const groupedArray = Object.values(
    mapping_variants.reduce((acc, item) => {
      const variantId = item.variant.id;

      if (!acc[variantId]) {
        acc[variantId] = {
          variant_id: variantId,
          attributes: [],
        };
      }

      acc[variantId].attributes.push({
        id: item.attribute.id,
        name: item.attribute.name,
      });

      return acc;
    }, {})
  );

  const handleAddToCard = (product) => {
  if (product?.has_variant == 0) {
    dispatch(addToCart({ ...product, qty: value }));
    dispatch(toggleShopCardDrawer());
    return;
  }

  // 🔴 variant product হলে must select
  if (selectedVariant.length !== groupedArray.length) {
    alert("Please select all variants");
    return;
  }
  const selectedAttrIds = selectedVariant.map(v => v.attribute_id);

  const matchedVariant = mapping_variants.find((item) =>
    selectedAttrIds.includes(item.attribute.id)
  );

  if (!matchedVariant) {
    alert("Variant not available");
    return;
  }

   const variantInfo = selectedVariant?.map((item)=>{
    const variantAttribute = mapping_variants.find((mv)=> mv.attribute.id === item.attribute_id && mv.variant.id === item.variant_id);
    return {
      variant_id: item.variant_id,
      attribute_id: item.attribute_id,
      attribute_name: variantAttribute?.attribute?.name,
      variant_name: variantAttribute?.variant?.name,
    }
   });
  const productData= {
      ...product,
      variantInfo: variantInfo,
      quantities: value || 1,
    }
  dispatch(
    addToCart(productData)
  );
  dispatch(toggleShopCardDrawer());
};


  const handleVariantSelect = (variantId, attr) => {
    setSelectedVariant((prev) => {
      const exists = prev.find((v) => v.variant_id === variantId);

      if (exists) {
        // same variant হলে replace হবে
        return prev.map((v) =>
          v.variant_id === variantId
            ? { variant_id: variantId, attribute_id: attr.id }
            : v
        );
      }

      // new variant add
      return [...prev, { variant_id: variantId, attribute_id: attr.id }];
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <ProductDetailsImageSection
              imagesData={product?.images?.map((item) => item?.image)}
            />
          </div>

          {/* Product Details */}
          <div>
            <ProductHeader product={product} />
            <div className="pt-5">
              <h1 className=" text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium mb-4">
                {product?.name}
              </h1>

              <div className="flex items-center gap-3 py-2">
                <p className="text-base md:text-xl text-primary-base  font-bold">
                  ${product?.base_price}
                </p>
              </div>
              <div className="space-y-3 pb-5">
                {groupedArray?.map((variant) => (
                  <div key={variant.variant_id}>
                    <div className="flex items-center gap-3">
                      {variant.attributes.map((attr) => {
                        const isActive = selectedVariant.some(
                          (v) =>
                            v.variant_id === variant.variant_id &&
                            v.attribute_id === attr.id
                        );

                        return (
                          <button
                            key={attr.id}
                            onClick={() =>
                              handleVariantSelect(variant.variant_id, attr)
                            }
                            className={`border px-3 py-1 text-sm transition-all cursor-pointer duration-300
                            ${
                              isActive
                                ? "border-primary-base bg-primary-base text-white"
                                : "border-gray-400 hover:border-primary-base hover:text-primary-base"
                            }`}
                          >
                            {attr.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <button
                    onClick={decrement}
                    className="hover:bg-primary-base hover:border-primary-base hover:text-white text-black-muted cursor-pointer duration-200 border border-black-muted px-2 py-1 text-2xl"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min={1}
                    className="w-6.75 text-center py-2 outline-0 border-t border-b border-black-base no-spinner"
                  />

                  <button
                    onClick={increment}
                    className="hover:bg-primary-base hover:border-primary-base hover:text-white text-black-muted border cursor-pointer border-black-muted px-2 py-1 text-2xl"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAddToCard(product)}
                    className="bg-primary-base text-sm font-semibold text-white px-4 py-3 rounded transition-all duration-300 ease-in-out hover:bg-orange-500  cursor-pointer hover:scale-105 shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-3">
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-black-base hover:text-black-muted duration-200"
                >
                  <PiShareNetworkFill className="text-lg" />
                  <span className="text-sm font-medium">Compare</span>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 text-black-base hover:text-black-muted duration-200"
                >
                  <FaRegHeart className="text-lg" />
                  <span className="text-sm font-medium">Add to wishlist</span>
                </Link>
              </div>
              <div className="pb-4 border-t border-gray-400">
                <div className="text-black-muted text-sm pt-3 pb-4  space-y-3">
                  <h1>
                    <span className="text-black-base  font-semibold">SKU:</span>{" "}
                    {product?.sku}
                  </h1>
                  <h1>
                    <span className="text-black-base  font-semibold">
                      Categories:
                    </span>{" "}
                    {product?.category?.name}
                  </h1>

                  <div className="flex items-center gap-1">
                    <span className="text-black-base font-semibold">
                      Share:
                    </span>{" "}
                    <div className="flex items-center gap-2">
                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <FaFacebookF className="text-sm" />
                      </Link>

                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <FaXTwitter className="text-sm" />
                      </Link>
                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <IoLogoYoutube className="text-sm" />
                      </Link>
                      <Link
                        href={"/"}
                        className="text-black-muted hover:text-black-base duration-300"
                      >
                        <FaLinkedinIn className="text-sm" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product details  and review  */}
      <ProductDetailsAndReview product={product} />
      <RelatedProducts relatedProduct={relatedProduct} />
    </>
  );
}
