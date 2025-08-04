import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../appwrite/config';
import { Query } from 'appwrite';
import { Card01, ContainerLayout, Slider } from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

function Category() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
 
  console.log(category)

const {recentPosts , isLoading,isError}=useSelector((state)=>state.posts)

  useEffect(() => {
    
    const recentPostsCate = recentPosts.filter((post)=>post.category===category)
    setPosts(recentPostsCate)
  }, [category]);

  return (
    <ContainerLayout>
      <Slider
        slide={[
          {
            image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
            title: 'Explore the Mountains',
          },
        ]}
        buttonClassName="hidden"
      />

    
      {isLoading ? (
        <div className="text-center text-gray-500 py-10">Loading posts...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {posts.map((post) => (
            <Card01
              key={post.$id}
              image={post.featuredImage}
              alt={post.title}
              category={post.category}
              title={post.title}
              userImage={'./default_user.png'}
              userAlt={'Image-User'}
              para={post.content}
              date={post.date}
              link={`/post/${post.$id}`}
            />
          ))}
        </div>
      )}
    </ContainerLayout>
  );
}

export default Category;
