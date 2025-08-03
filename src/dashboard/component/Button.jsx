import React, { Children } from 'react'
import { Link } from 'react-router-dom'

function Button(
    {
       
        type='submit',
         link='#',
        className='',
        children ,
        ...props
        
    }
) {
    return (
        <>
        <Link to={link} >
        <button type={type} 
        className={`
            bg-green-400 h-10 px-10 text-lg text-black font-sens font-semibold rounded-lg cursor-pointer
            ${className}`} 
        {...props}>
            {children}
        </button>
        </Link>
        </>
    )
}

export default Button
