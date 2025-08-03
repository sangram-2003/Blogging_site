import React from 'react'

function Logo(
    {
        className='',
    }
) {
    return (
       <div className='h-full b w-auto'>
           <div className='text-2xl font-bold h-full overflow-hidden '>
            <img src='./logo.jpg' className={`object-cover object-center w-32 ${className}`}></img>
           </div>
       </div> 
    )
}

export default Logo
