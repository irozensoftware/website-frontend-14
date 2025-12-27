"use client"
import React from "react";
import ProductInfo from "./ProductInfo";
import { useGetProductBySlugQuery } from "@/redux/api/commonApi";

const ProductDetails = ({ slug }) => {
  const {data}=useGetProductBySlugQuery(slug);
  return (
    <>
      <ProductInfo  product={data?.data} relatedProduct={data?.relatedProduct} />
    </>
  );
};

export default ProductDetails;
