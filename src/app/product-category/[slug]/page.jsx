import ProductCategory from '@/components/pages/product-category/ProductCategory'
import React from 'react'

const Page = async ({params}) => {
    const {slug} = await params;
  return (
    <>
       <ProductCategory slug={slug}/>
    </>
  )
}

export default Page
