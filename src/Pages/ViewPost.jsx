import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { Card01, ContainerLayout, LoadingSpinner } from "../components";
import {getOnePost} from '../store/postSlice'



import { Query } from "appwrite"; 

export default function ViewPost() {

  const [sameTypePost, setSameTypePost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const post =useSelector((state)=>state.posts.post)
  const {recentPosts , isLoading}=useSelector((state)=>state.posts)
 
  
 useEffect(() => {
  dispatch(getOnePost(slug));
}, [slug]);

useEffect(() => {
  if (post?.category && recentPosts?.length > 0) {
    const sameTypePosts = recentPosts.filter(
      (item) => item.category === post.category
    );
    setSameTypePost(sameTypePosts);
  }
}, [post, recentPosts]);

  console.log("get post ,,,,,,",post)



  return post ? (
    <ContainerLayout className="px-2">
      <div className="py-8">
        <div className="w-full flex justify-center mb-4 relative border rounded-xl ">
          {post.featuredImage && (
            <img
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl max-h-[500px] object-cover w-full h-full"
            />
          )}

      
        </div>

        <div className="w-full mb-6">
          <div className="flex justify-between items-center">
            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 text-xs text-white shadow-sm w-20 text-center">
              {post.category}
            </div>
            <div>
              <p className="text-base text-gray-600">{post.created}</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

        <div className="text-base text-black">
  {typeof post.content === "string" ? parse(post.content) : null}
</div>
       

        {sameTypePost.length > 1 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sameTypePost
                .filter((item) => item.$id !== post.$id)
                .map((item) => (
                   <Card01 
                key={item.$id}
                image={item.featuredImage}
                alt={item.title}

  category={item.category}
  title={item.title}
  
  userImage={'./default_user.png'}
  userAlt = {'Image-User'}
  para={item.content}
  date={item.date}
 
  link={`/post/${item.$id}`}
              />
                ))}
            </div>
          </div>
        )}
      </div>
    </ContainerLayout>
  ) : (
    <LoadingSpinner/>
  );
}
