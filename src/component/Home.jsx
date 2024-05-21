import React from 'react'
import Carousel from './Carousel'
import FeaturedItems from './FeaturedItems'
import PopularItems  from './PopularItems'
function Home() {
  return (
    <div className='w-full overflow-x-hidden '>
      <Carousel />
      <FeaturedItems />
      <PopularItems />
    </div>
  )
}

export default Home
