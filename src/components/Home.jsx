import React from 'react'
import IntroCard from './IntroCard'
import MainInfo from './MainInfo'
import FeaturedProject from './FeaturedProject'

function Home() {
  return (
    <div className='dark:bg-black p-1'>
      <IntroCard />
      <MainInfo />
      <div className="mx-auto mt-4 w-full lg:w-11/20 px-6">
        <FeaturedProject />
      </div>
    </div>
  )
}

export default Home