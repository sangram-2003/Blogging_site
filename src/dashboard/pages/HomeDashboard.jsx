import React, { useEffect, useState } from 'react'
import {Button, Card, Item} from '../component'
import service from '../../appwrite/config';
function HomeDashboard() {

    const [posts , setPosts]=useState([]);
    const [error , SetError]=useState("");
    const [loading , setLoading]=useState(true)
    useEffect(()=>{
        SetError("")
       try {
         service.getPosts()
         .then((posts)=> setPosts(posts.documents));
       } catch (error) {
        console.log("Dashboard Home page :: " , error)
        SetError(error.message)
       }
       finally
       {
        setLoading(false)
       }
    },[posts])


    return (
       <>
    
        {
            loading ? (<h1>Loading.....</h1>):(
                   <div className='w-full h-screen  overflow-auto pb-[5rem]  mb-4 px-4     md:flex md:justify-center md:items-center'>
        <div className='w-full  mt-10 sm:mt-10 md:mt-0  grid lg:grid-cols-3  md:grid-cols-2 gap-10   sm:h-auto'>
             <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
        </div>
        </div>
            )
        }
     
      
       </> 
    )
}

export default HomeDashboard
