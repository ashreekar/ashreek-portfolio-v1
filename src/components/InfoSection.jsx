import React from 'react'
import Education from './Education'
import FeaturedProjects from './FeaturedProjects'

function InfoSection({ option, setOption }) {
    return (
        <div className='p-1 mt-4 rounded-md shadow-md border border-gray-100'>
            {
                option === "education" ? <Education /> : <FeaturedProjects />
            }
        </div>
    )
}

export default InfoSection