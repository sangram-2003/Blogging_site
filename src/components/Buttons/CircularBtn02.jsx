import React from 'react'

function CircularBtn02({
    title='keyword',
    className='',
    ...props
}) {
    return (
        <button className={`bg-red-300 px-5 m-0.5 rounded-full flex justify-center items-center ${className}`}
        {...props}
        >

                {title}
               </button>
    )
}

export default CircularBtn02
