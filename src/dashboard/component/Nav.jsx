import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = (
  {
    className=""
  }
) => {
  const navigate = useNavigate();
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const authStatus =  useSelector(state => state.auth.status);
 const dispatch = useDispatch();
  console.log(authStatus);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const logoutHandler =  ()=>{
       try {
        authService.logout()
        .then(()=>dispatch(logout()))
       } catch (error) {
        console.log("Logout Button ::",error)
       }
  }
  return (
    <>
      <div className={`w-full   h-full  flex gap-5 items-center  py-2 px-2 border-b-2 border-gray-200 justify-between ${className}`}>
        <div className="w-full  h-full flex gap-4 rounded-md items-center text-2xl font-bold justify-around">
         <div className=" w-full flex gap-4 items-center sm:hidden  h-full">
            <h1 className="w-auto ">Travel</h1>
             <div className=" flex gap-4 items-center sm:hidden">
              <Link to={'/dashboard'}>
               <p className="text-base cursor-pointer">Home</p>
              </Link>
               <Link to={'/dashboard/all-posts'}>
               <p className="text-base cursor-pointer">Posts</p>
              </Link>
               <Link to={'/dashboard/add-post'}>
               <p className="text-base cursor-pointer">Add Post</p>
              </Link>
         </div>
         </div>
        
        </div>

        <div className=" sm:w-[30rem] flex  justify-end gap-6">
          
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
              <div className="absolute right-4 top-16 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2">
                  
                  <li>
                    <NavLink to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Web</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={logoutHandler}
                    >Sign out</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;