import React from 'react'
import IntroCard from './IntroCard'
import MainInfo from './MainInfo'

function Home() {
  return (
    <div className='dark:bg-black p-1'>
        <IntroCard/>
        <MainInfo/>
    </div>
  )
}

export default Home