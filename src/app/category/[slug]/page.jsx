import BlogCategoryPage from '@/components/pages/blogs/BlogCategoryPage'
import React from 'react'

const Page =async ({params}) => {
    const {slug}= await params
  return (
    <>
      <BlogCategoryPage slug={slug}/>
    </>
  )
}

export default Page
