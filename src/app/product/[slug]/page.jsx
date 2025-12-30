import ProductDetails from '@/components/pages/product/product-details/ProductDetails'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Product",
    description:"Learn more Product",
  };
}
const Page = async({params}) => {
    const {slug} = await params
  return (
    <>
      <ProductDetails slug={slug}/>
    </>
  )
}

export default Page
