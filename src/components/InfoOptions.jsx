import React from 'react'

function InfoOptions({ option, setOption }) {
    const selectedClass="bg-white shadow-md rounded-md h-full w-1/2 text-center p-1 text-gray-800 font-semibold transition duration-300 cursor-pointer"
    const outClass="h-full w-1/2 text-center font-semibold text-gray-700 p-1 transition duration-300 cursor-pointer"
    return (
        <div className='bg-gray-100 flex p-1 rounded-md gap-2'>
            <p className={option==="projects"?selectedClass:outClass} onClick={()=>setOption("projects")}>Experience</p>
            <p className={option==="education"?selectedClass:outClass} onClick={()=>setOption("education")}>Education</p>
        </div>
    )
}

export default InfoOptions