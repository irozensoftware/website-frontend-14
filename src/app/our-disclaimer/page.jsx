import OurDisclaimer from '@/components/pages/our-disclaimer/OurDisclaimer'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Our Disclaimer",
    description:"Learn more  Our Disclaimer",
  };
}
const page = () => {
  return (
    <>
    <OurDisclaimer/>
    </>
  )
}

export default page
