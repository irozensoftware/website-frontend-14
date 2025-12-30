import BlogCategoryPage from '@/components/pages/blogs/BlogCategoryPage'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Category",
    description:"Learn more Category",
  };
}
const Page =async ({params}) => {
    const {slug}= await params
  return (
    <>
      <BlogCategoryPage slug={slug}/>
    </>
  )
}

export default Page
