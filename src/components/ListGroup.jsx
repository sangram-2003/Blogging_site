// ListGroup.jsx
import React from 'react'
import ListButton from './Buttons/ListButton'

function ListGroup(
   {data , type}
) {


   
    return (
        <div className="w-full  grid grid-cols-2 gap-2 py-1">
           {
            data?.map((item)=>(

                <ListButton
                key={item.id}
                label={item.label}
                typeList={item.type}
                icon={
                    item.icon
                }
                image={item.image}
                url={item.url}
            />
            ))
           }
           

            
            
            
        </div>
    )
}

export default ListGroup
