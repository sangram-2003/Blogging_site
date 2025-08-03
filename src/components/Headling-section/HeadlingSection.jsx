import React from 'react'
import MoreBtn from '../Buttons/MoreBtn'

function HeadlingSection({children}) {
    return (
        <div className='  h-12 mb-1 flex justify-between px-2 items-center'>
        {children}
        </div>
    )
}

export default HeadlingSection
