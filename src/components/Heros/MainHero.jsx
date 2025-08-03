import React from 'react';
import './Hero.css'; // Import custom CSS

function MainHero() {
    const imageSet1 = [
        "https://pagedone.io/asset/uploads/1725433862.png",
        "https://pagedone.io/asset/uploads/1725433874.png",
        "https://pagedone.io/asset/uploads/1725433888.png",
        "https://pagedone.io/asset/uploads/1725433900.png",
    ];

    return (
        <div className='w-full h-full p-1 '>
            <div className='w-full px-6 -mt-5 md:px-24'>
                <div className='w-full h-[37.5rem]'>
                    <div className="relative h-full overflow-hidden rounded-2xl mt-8">
                        <div className="pt-48 pb-14 h-full bg-gradient-to-r from-[#46ace5b3] to-[#610acfb3] rounded-2xl flex flex-col relative z-[1]">
                            <h2 className="font-manrope font-bold text-4xl text-white text-center mb-6">
                                1000+ Tailwind Blocks
                            </h2>
                            <p className="text-base font-inter text-white text-center max-w-lg mx-auto mb-8">
                                Access over 1,000 ready-made Tailwind blocks with modern designs to accelerate your design process.
                            </p>
                            <a href="https://pagedone.io/blocks" className="py-2 px-3.5 rounded-full bg-white text-sm font-medium text-black w-max mx-auto">
                                Explore More
                            </a>
                        </div>

                        {/* Scrollable Columns */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 absolute top-0 left-0 w-full h-full z-0 px-2">
                            {[0, 1, 2].map((colIndex) => (
                                <div key={colIndex} className={`overflow-hidden`}>
                                    <div className={`scroll-column ${colIndex % 2 === 0 ? 'scroll-down' : 'scroll-up'}`}>
                                        {[...imageSet1, ...imageSet1].map((src, i) => (
                                            <img
                                                key={`${colIndex}-${i}`}
                                                src={src}
                                                alt={`img-${i}`}
                                                className="w-full mb-4 rounded-lg"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHero;
