import React, { useState, useEffect } from 'react'

function Slider({ slide = [] , className='' , buttonClassName='' , headlineClassName = ' ' , paraClassName='' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slide.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slide.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full bg-red-200">
      {/* Slides */}
      <div className={`relative h-screen  overflow-hidden ${className}`}>
        {slide.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt={item.title}
            />
            <div className={`absolute  inset-0 flex items-center justify-center text-white bg-black/40 text-center px-4`}>
              <div className='w-1/2'>
                <h2 className={`text-xl md:text-3xl font-bold ${headlineClassName}`}>{item.title}</h2>
                <p className={`text-sm md:text-lg mt-2 ${paraClassName}`}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
      
        onClick={prevSlide}
        className={`absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none ${buttonClassName}`}
      >
        <span className={`inline-flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/30 hover:bg-white/50 ${buttonClassName}`}>
          ❮
        </span>
      </button>

      <button
      
        onClick={prevSlide}
        className={`absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none ${buttonClassName}`}
      >
        <span className={`inline-flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10  rounded-full bg-white/30 hover:bg-white/50 ${buttonClassName}`}>
          ❯
        </span>
      </button>

     

      {/* Dots */}
      <div className={`absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2 ${buttonClassName}`}>
        {slide.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 sm:w-3 sm:h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Slider
