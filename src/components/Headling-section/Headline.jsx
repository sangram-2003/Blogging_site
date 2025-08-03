import React from 'react'

function Headline({title , color='text-black' , className="", ...props}) {
    return (
        <h2 className={`text-xl ${color} ${className}` } {...props}>{title}</h2>
    )
}

export default Headline
