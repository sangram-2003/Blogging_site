import { Link, useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Item } from "../component";
import { Query } from "appwrite";
import { getPostsByQuery, getRecentPosts } from "../../store/postSlice";
import { getPhotos } from "../../store/gallerySlice";
const AllPostDashboard = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData =  useSelector(state => state.auth.userData)||{};
  const { posts}=useSelector(state =>state.posts)
  const userID = userData.userData.$id;
 
  console.log("User same  in all post dashboard ", userData)
  console.log(posts)
useEffect(()=>{
  dispatch(getPostsByQuery([
      Query.equal("userID", userID),
      Query.orderDesc("$createdAt")
    ]

  ))
  
 
    
},[userID])
  return (
    <>
     <div className="w-full h-auto">
      <h1 className="text-2xl pt-2 pb-8 font-semibold ">All Posts</h1>
      <ul className="flex-col  space-y-3 ">
      {
         posts.map((item , index)=>(
          <Item posts={item} key={index}/>
        ))
      }
      </ul>
     </div>
    </>
  );
};

export default AllPostDashboard;
