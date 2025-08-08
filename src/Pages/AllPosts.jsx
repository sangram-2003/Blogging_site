import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";
import { Card01, ContainerLayout } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function AllPosts() {
 
  const {recentPosts , isLoading}=useSelector((state)=>state.posts)
console.log(recentPosts)
  

  return (
   
    <ContainerLayout className="px-2">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-6">All Blog Posts</h1>

        {isLoading ? (
          <div className="text-center text-gray-500 py-10">Loading posts...</div>
        ) : recentPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">No posts available.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card01 
              
                image={post.featuredImage}
                alt={post.title}

  category={post.category}
  title={post.title}
  
  userImage={'./default_user.png'}
  userAlt = {'Image-User'}
  para={post.content}
  date={post.date}
 
  link={`/post/${post.$id}`}
              />
            ))}
          </div>
        )}
      </div>
    </ContainerLayout>
  );
}
