import React, { useState } from 'react'
import InfoOptions from './InfoOptions'

function MainInfo() {
    const [option,setOption]=useState("projects");

  return (
    <div className="mx-auto mt-4 w-full lg:w-1/2 px-6">
        <InfoOptions option={option} setOption={setOption} />
    </div>
  )
}

export default MainInfo