import React, { useState } from 'react'
import InfoOptions from './InfoOptions'
import InfoSection from './InfoSection';

function MainInfo() {
    const [option,setOption]=useState("projects");

  return (
    <div className="mx-auto mt-4 w-full lg:w-1/2 px-6">
        <InfoOptions option={option} setOption={setOption} />
        <InfoSection option={option} setOption={setOption} />
    </div>
  )
}

export default MainInfo