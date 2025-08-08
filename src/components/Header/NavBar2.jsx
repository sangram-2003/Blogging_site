import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import CommanBtn from '../Buttons/CommanBtn'
import authService from '../../appwrite/auth'
import { FiAlignJustify ,  FiX  } from "react-icons/fi";
import { logout } from '../../store/authSlice'
function NavBar2({
  className=''
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isNavManuOpen , setIsNavManuOpen]=useState(false);
  const authStatus =  useSelector(state => state.auth.status);
 const dispatch = useDispatch();
  console.log(authStatus);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const logoutHandle=  ()=>{
       try {
        authService.logout()
        .then(()=>dispatch(logout()))
       } catch (error) {
        console.log("Logout Button ::",error)
       }
  }




     const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <>
      <nav className={`${className}  sm:px-5  md:px-10 lg:px-15 border-b w-full mb-1  border-gray-200 dark:bg-gray-900`}>
        <div className="w-full  flex  items-center justify-between mx-auto p-4">
          <NavLink to="#" className="flex  items-center space-x-3 rtl:space-x-reverse">
           
          
             <h1 className='text-2xl font-bold'>Travel</h1>
            
          </NavLink>

           <div className="items-center  w-auto h-8   justify-between hidden  sm:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex  font-medium p-4 ">
             {
                 navItems.map((item)=>
                  
                 item.active ? (
                  <li key={item.name}>
                    <NavLink to={`${item.slug}`}>
                   <button
                   
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
          
                   >{item.name}</button>
                   </NavLink>
                  </li>
                 ):null  )
                 
            }
            
            {/* {
              authStatus && (
                <CommanBtn title='Logout'></CommanBtn>
              )
            } */}
             
            </ul>
          </div>

          <div className=" hidden sm:flex  items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
            </button>

            {/* 👇 Dropdown */}
            {isDropdownOpen && (
              <div className="absolute  right-4 top-16 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2">
                  <li>
                    <NavLink to={`${'/dashboard'}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={logoutHandle}
                    >Sign out</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>




<div className=" flex sm:hidden  items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm   focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleDropdown}
            >
              
              {
                isNavManuOpen ? (
                   <FiX size={28} onClick={()=>setIsNavManuOpen(false)}/>
                ):
                (
                 <FiAlignJustify size={28} onClick={()=>setIsNavManuOpen(true)}/>
                )
              }
              
            </button>

           
          </div>
         
        </div>
      </nav>

    {
      isNavManuOpen && (

          <div className="w-screen h-screen bg-gray-700/20 flex justify-center items-center">
  <div className="w-full max-w-[800px] h-full flex flex-col justify-center items-center gap-6">

    {/* Circle */}
    <div className="w-48 h-48 rounded-full bg-red-400 relative">
      <img className="w-full h-full rounded-full relative" src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
    </div>

    {/* Navigation Items */}
    <ul className="flex w-full flex-col justify-center items-center list-none space-y-2">
      {navItems.map((item) =>
        item.active ? (
          <li key={item.name} className='' >
            <NavLink to={`${item.slug}`} onClick={()=>setIsNavManuOpen(false)}>
              <button className="inline-block text-lg font-semibold px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                {item.name}
              </button>
            </NavLink>
          </li>
        ) : null
      )}
    </ul>

    {/* Dashboard Buttons */}
    <div className="flex flex-col justify-center items-center space-y-4">
      <NavLink to={`${'/dashboard'}`}  onClick={()=>setIsNavManuOpen(false)}>
      <button className="w-60 bg-sky-400 h-10 rounded-lg">Dashboard</button>

      </NavLink>
           
       <button onClick={()=>(logout , setIsNavManuOpen(false))} 
       
       className="w-60 bg-red-400 h-10 rounded-lg">Logout</button>
    </div>
    
  </div>
</div>
      )
    }

    </>
  )
}

export default NavBar2
