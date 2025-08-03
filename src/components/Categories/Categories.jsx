import React from 'react'
import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <div className='w-full px-4 py-8'>
      <div className=' flex-col flex sm:flex-row sm:flex lg:flex-row lg:justify-between gap-6'>
        <CategoryCard
          className='bg-gray-900/20'
          link={`/posts/Travel`}
          image='./1.jpg'
          category='Travel'
          title='Starry Escape'
          para='Float beyond the ordinary ,discover peace where sky meets water'
        />
        <CategoryCard
          className='bg-gray-900/20'
          link={`/posts/Caltural`}
          image='./c3.jpg'
          category='Caltural'
          title='Roots & Rhythms'
          para='Feel the spirit of tradition echo across timeless lands'
        />
        <CategoryCard
          className='bg-gray-900/20'
          link={`/posts/Advanture`}
          image='./ad4.jpg'
          category='Advanture'
          title='Wild Waters'
          para='Ride the rapids. Laugh louder. Live bolder'
        />
      </div>
    </div>
  )
}

export default Categories
