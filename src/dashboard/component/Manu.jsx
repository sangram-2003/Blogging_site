import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Manu() {
    const navigate = useNavigate();
      return (
    <>
      <div className="flex-col mt-3 -space-y-2">
        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard")} // Navigate to Home
        >
          <div className="text-md group-hover:text-black">
            {/* <TiHome className="text-black text-lg  font-bold" /> */}
          </div>
          <Link to={'/dashboard'}>
          <div className="text-md font-semibold group-hover:text-black">
            Home
          </div>
          </Link>
          
        </div>

        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard/all-posts")} // Navigate to Projects
        >
          <div className="text-md group-hover:text-black">
            {/* <BsFillGearFill className="text-black text-lg  font-bold" /> */}
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Posts
          </div>
        </div>

        <div
          className="w-full h-12  group hover:bg-pink-400 hover:scale-105 rounded-md py-2 px-8 flex justify-between items-center transition duration-100"
          onClick={() => navigate("/dashboard/add-post")} // Navigate to Projects
        >
          <div className="text-md group-hover:text-black">
            {/* <BiBrain className="text-black text-lg  font-bold" /> */}
          </div>
          <div className="text-md font-semibold group-hover:text-black">
            Add Post
          </div>
        </div>



        
      </div>
    </>
  );
}

export default Manu
