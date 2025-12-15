import React from 'react'
import PromoBanners from './PromoBanners'
import YouAlsoLike from './YouAlsoLike'
import HotDealsSection from './HotDealsSection'
import AccessoriesFeatureSection from './AccessoriesFeatureSection'
import BeautyCareBanner from './BeautyCareBanner'
import BlogsSection from './BlogsSection'

const HomePage = () => {
  return (
    <div>
       <PromoBanners/>
       <YouAlsoLike/>
       <HotDealsSection/>
       <AccessoriesFeatureSection/>
       <BeautyCareBanner/>
       <BlogsSection/>
    </div>
  )
}

export default HomePage
