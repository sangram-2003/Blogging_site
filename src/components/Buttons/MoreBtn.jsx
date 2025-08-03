import React from 'react'
import { Link } from 'react-router-dom'


function MoreBtn({
   
    title,
    className="",
    link,
    ...props
    
}) {

    return (
        
           <button 
          
       className={`px-8 py-1  rounded-md ${className}` }
      
        {...props}
     
      

       >
        {title}</button>
       
       
    )
}

export default MoreBtn
