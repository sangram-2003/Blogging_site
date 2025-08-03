import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryCard({
  image,
  alt = 'Category-image',
  title,
  para,
  link = '#',
  className = '',
  ...props
}) {
  return (
    <NavLink to={link}>
      <div
        className={`bg-red-50 hover:bg-slate-100 hover:scale-105 transition-all 
        rounded overflow-hidden border border-gray-300 
        flex flex-row sm:flex-col lg:flex-row justify-between items-center 
        w-full h-full  lg:w-full  gap-2 px-4 py-4 ${className}`}
        {...props}
      >
        <div className='w-full sm:w-2/3 lg:w-2/3'>
          <h1 className='text-xl font-semibold'>{title}</h1>
          <p className='text-sm text-gray-700'>{para}</p>
        </div>

        <div className='w-full  lg:w-1/3 h-32'>
          <img
            className='w-full h-full  lg:w-full lg:h-full object-cover object-center rounded'
            src={image}
            alt={alt}
          />
        </div>
      </div>
    </NavLink>
  )
}

export default CategoryCard
