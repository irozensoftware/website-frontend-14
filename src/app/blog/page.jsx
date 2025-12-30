import BlogPage from '@/components/pages/blogs/BlogPage'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Blog Page",
    description:"Learn more about us",
  };
}
const page = () => {
  return (
    <>
      <BlogPage/>
    </>
  )
}

export default page
