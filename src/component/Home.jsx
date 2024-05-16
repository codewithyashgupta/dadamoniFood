import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import FeaturedItems from './FeaturedItems'
import PopularItems  from './PopularItems'
import Footer  from './Footer'
import LowerNav from './LowerNav'
function Home() {
  return (
    <div className='w-screen h-screen overflow-x-hidden '>
      <NavBar/>
      <Carousel />
      <FeaturedItems />
      <PopularItems />
      <Footer />
      <LowerNav />
    </div>
  )
}

export default Home
