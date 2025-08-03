import React from 'react'

function HeadlineMiddle({children}) {
    return (
        <div className=' flex-col  sm:m-5 w-full h-auto  flex justify-between sm:px-2 items-center'>
        <h1 className='text-5xl font-semibold mb-2 '>Image Gallary</h1>
        <p className=' w-full mt-4 sm:w-1/2 text-center text-lg  leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita eaque voluptatem voluptates reiciendis rem dignissimos ad distinctio consequatur esse autem, magnam velit exercitationem, id quibusdam quidem officia, laboriosam adipisci eum!</p>
        </div> 
    )
}

export default HeadlineMiddle
