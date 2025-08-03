import React from 'react'
import MoreBtn from '../Buttons/MoreBtn'
import CommanBtn from '../Buttons/CommanBtn'
import CircularBtn from '../Buttons/CircularBtn'
import Logo from './Logo'
import CircularBtn02 from '../Buttons/CircularBtn02'

function NavBar() {
    return (
        <>
        <nav className='w-full h-24 p-1 '>
            <div className='w-full px-24 h-4/6  border-b-[1px] flex justify-between items-center'>
             
             <div className='flex w-7/12 gap-36'>
                <h2>Travel</h2>
                <ul className='flex gap-10 font-medium justify-center items-center '>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About us</li>
                    
                </ul>
             </div>
             <div className='flex gap-8 justify-center items-center'>
                <div>
                    <input className='h-10 px-4 rounded-md' placeholder='Search '/>
                </div>
                <CommanBtn title={"Login"} bgColor={'bg-green-400'}  />
                <CommanBtn title={"Logout"} bgColor={'bg-sky-400'}/>
               <CircularBtn/>
             </div>
             
            </div>
        
            <div className='w-full h-2/6  px-24  flex gap-3 mt-1'>
              <CircularBtn02 title='Startup' className='bg-green-200 py-4'/>
               <CircularBtn02 title='Entropronior' className='bg-green-200 py-4'/>
            </div>
          
        </nav>

        </>
    )
}

export default NavBar
