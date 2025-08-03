import React from 'react'

function CommanBtn({
    title='Click',
    className='',
    bgColor='bg-red-400',
    textColor='text-black',
    type='submit',
    ...props

}) {
    return (
        <>
        <div>
            <button 
            type={type}
            className={`${className} ${bgColor} ${textColor} w-28 rounded-lg text-lg font-medium  text-center  h-10 `}
            {...props}
            >
                {title}
                </button>
        </div>

        </>
    )
}

export default CommanBtn
