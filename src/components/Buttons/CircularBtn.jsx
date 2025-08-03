import React from 'react'

function CircularBtn(
    {
        image,
        className='',
        bgColor='bg-gray-200',
        ...props
    }
) {
    return (
       <>
       <div>
        <button className={`${className} ${bgColor} h-10 w-10 rounded-full `}></button>
       </div>
       </> 
    )
}

export default CircularBtn
