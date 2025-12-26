import BlogPost from '@/components/pages/blogs/BlogDetails'
import React from 'react'

const Page =async ({params}) => {
  const {slug}=  await params;
  return (
    <>
      <BlogPost slug={slug} />
    </>
  )
}

export default Page
