import Packaging from '@/components/pages/packaging/Packaging'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Packing",
    description:"Learn more Packing",
  };
}
const page = () => {
  return (
    <>
      <Packaging/>
    </>
  )
}

export default page
