import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { Card01, ContainerLayout } from "../components";
// import Button from "../components/Button"; // Uncomment if using a custom Button

import { Query } from "appwrite"; // Make sure you have this if using appwrite Query

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const [sameTypePost, setSameTypePost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
   console.log(sameTypePost)
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  // Fetch post data
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((postData) => {
        if (postData) {
          setPost(postData);
          service
            .getPostsByQuery([Query.equal("category", `${postData.category}`)])
            .then((samePost) => {
              if (samePost) {
                setSameTypePost(samePost.documents);
              }
            });
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  // Delete post handler
  const deletePost = () => {
    if (!post) return;
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <ContainerLayout className="px-2">
      <div className="py-8">
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          {post.featuredImage && (
            <img
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl max-h-[500px] object-cover"
            />
          )}

          {isAuthor && (
            <div className="absolute right-6 top-6 flex gap-2">
              {/* Uncomment below if using a custom Button component */}
              {/* 
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button> 
              */}

              {/* Regular buttons if not using custom Button */}
              {/* <Link to={`/edit-post/${post.$id}`}>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Edit
                </button>
              </Link>
              <button
                onClick={deletePost}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button> */}
            </div>
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

        <div className="browser-css h-auto w-full">
          <div className="text-base text-black">{parse(post.content)}</div>
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
    <div className="text-center py-20 text-gray-500">Loading post...</div>
  );
}
