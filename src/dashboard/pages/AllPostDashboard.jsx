import { Link, useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Item } from "../component";
import { Query } from "appwrite";
const AllPostDashboard = () => {
  const [posts , setPosts ]=useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData =  useSelector(state => state.auth.userData)||{};
  console.log(userData.$id,"sd") 
 
  console.log("User same  in all post dashboard ", userData)
  console.log(posts)
useEffect(()=>{
  try {
     service.getPostsByQuery([Query.equal('userID',userData.$id)])
     .then((posts)=> setPosts(posts.documents))
    
  } catch (error) {
    console.log("All post in dashboard , failed to fetch ::",error)
  }
    
},[userData])
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
