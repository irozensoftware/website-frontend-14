import ProductDetails from '@/components/pages/product/product-details/ProductDetails'
import React from 'react'

const Page = async({params}) => {
    const {slug} = await params
  return (
    <>
      <ProductDetails slug={slug}/>
    </>
  )
}

export default Page
