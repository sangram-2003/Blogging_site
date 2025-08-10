import React, { useEffect, useState } from 'react'
import {Button, Card, Item} from '../component'
import service from '../../appwrite/config';
import { useSelector } from 'react-redux';
import { RiFileList2Fill } from "react-icons/ri";
import { FaFaceSmileBeam } from "react-icons/fa6";



import { TfiBarChartAlt } from "react-icons/tfi";

import { HiTrendingDown } from "react-icons/hi";

import { HiTrendingUp } from "react-icons/hi";

import { FaLock } from "react-icons/fa";

import { FaUnlock } from "react-icons/fa";

function HomeDashboard() {

    // const [posts , setPosts]=useState([]);
    // const [error , SetError]=useState("");
    // const [loading , setLoading]=useState(true)
    // useEffect(()=>{
    //     SetError("")
    //    try {
    //      service.getPosts()
    //      .then((posts)=> setPosts(posts.documents));
    //    } catch (error) {
    //     console.log("Dashboard Home page :: " , error)
    //     SetError(error.message)
    //    }
    //    finally
    //    {
    //     setLoading(false)
    //    }
    // },[posts])


 const  [userPosts , setUserPosts] = useState({});
 const [userTrendingPosts , setUserTrendingPosts]=useState({});
 const [userNonTrendingPosts ,  setUserNonTrendingPosts]=useState({});
 const [userHiddenPosts ,  setUserHiddenPosts]=useState({});
 const [userVisiblePosts ,  setUserVisiblePosts]=useState({});

    const userData =  useSelector(state => state.auth.userData)||{};
    const {recentPosts , loading} =useSelector((state)=>state.posts)
    console.log(userData)

    useEffect(()=>{
        

        if(userData.$id)
        {
        const yourPosts= recentPosts.filter((post)=>post.userID == userData.$id);
       const trendingPosts = yourPosts.filter((post)=>post.trending == "true");
       const nonTrendingPosts = yourPosts.filter((post)=>post.trending =="false");
       const hiddenPosts= yourPosts.filter((post)=>post.status =="false");
       const visiblePosts= yourPosts.filter((post)=>post.status =="true");
       setUserPosts(yourPosts)
       setUserTrendingPosts(trendingPosts)
       setUserNonTrendingPosts(nonTrendingPosts)
       setUserHiddenPosts(hiddenPosts)
       setUserVisiblePosts(visiblePosts)
      
       
        }
      
     

    },[recentPosts , userData])

    console.log(userPosts ,userTrendingPosts ,userNonTrendingPosts,userHiddenPosts , userVisiblePosts ,"length of all type of post" )

    return (
       <>
    {
       
            loading ? (<h1>Loading.....</h1>):(
                   <div className='w-full h-screen  overflow-auto pb-[5rem]  mb-4 px-4     md:flex md:justify-center md:items-center'>
        <div className='w-full  mt-10 sm:mt-10 md:mt-0  grid lg:grid-cols-3  md:grid-cols-2 gap-10   sm:h-auto'>
            <Card  title="Total Posts" number={recentPosts.length} Icon={RiFileList2Fill } />
              <Card  title="Yours Posts" number={userPosts.length} Icon={FaFaceSmileBeam} />
                <Card  title="Visible " number={userVisiblePosts.length} Icon={FaUnlock} />
                  <Card  title="Hidden " number={userHiddenPosts.length}  Icon={FaLock}/>
                    <Card  title="Trending " number={userTrendingPosts.length} Icon={HiTrendingUp } />
                      <Card  title="Non Trending" number={userNonTrendingPosts.length} Icon={HiTrendingDown} />
        </div>
        </div>
            )
        }
       </> 
    )
}

export default HomeDashboard
