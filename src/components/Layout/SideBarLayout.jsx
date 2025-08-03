import React from 'react'

function SideBarLayout({children , className=''}) {
    return (
        <>
        <div className="w-full md:w-3/12  md:block h-full relative  right-0  ">
        <div className={`w-full  h-auto p-2 flex-col justify-center items-center space-y-4 ${className}`}>
  {children}
        </div>

        </div>
        </>
    )
}

export default SideBarLayout
