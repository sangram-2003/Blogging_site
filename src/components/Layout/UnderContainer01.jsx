import React from 'react'

function UnderContainer01({children}) {
    return (
       <>
       <div className="flex-col flex md:flex-row gap-2 w-full h-full relative ">
       {children}
       </div>
       </> 
    )
}

export default UnderContainer01
