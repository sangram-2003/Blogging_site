import React from 'react'

function Card(
    {
        title, 
        number , 
        image , 
        className='',
        ...props
    }
) {
    return (
        <>
        <div className={` ${className} w-full relative shadow-lg flex gap-2 bg-stone-300/50 h-40 rounded-lg `} {...props}>
         <div className='w-2/6   h-full relative  '>
              <div className='w-24 sm:w-36 md:w-20 h-28 shadow-lg bg-green-300 absolute -top-5 left-4 rounded-xl'>
                <img src={image} alt='image' />
              </div>
         </div>
         <div className='w-4/6  h-full flex justify-center items-center'>
              <div className='mr-4' >
                <h1 className='text-3xl font-bold text-center'>{title}</h1>
              <p className='text-2xl font-bold text-center'><span>+</span>{number}</p>
     
              </div>
                  </div>
        </div>
        </>
    )
}

export default Card
