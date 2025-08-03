import React from 'react';
import Button from './Button';
import service from '../../appwrite/config';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Item({ posts }) {
    const navigate = useNavigate();

    if (!posts) return null; // ✅ Don't render if no data

    const date = new Date(posts.date).toDateString();
    const userData = useSelector(state => state.auth.userData);
    const isAuthor = posts && userData ? posts.userId === userData.$id : false;
   console.log(isAuthor)
    const deletePost = () => {
        if (!posts) return;
        service.deletePost(posts.$id).then((status) => {
            if (status) {
                service.deleteFile(posts.featuredImage);
                navigate("/");
            }
        });
    };

    return (
        <div className='w-full'>
            <div className="w-full rounded-lg p-2 bg-black/5 border border-gray-300 shadow-lg h-full grid grid-cols-12 gap-2.5">
                <div className='col-span-1 flex justify-center'>
                    <img src={service.getFilePreview(posts.featuredImage)} className='h-24 w-24 rounded-lg' />
                </div>
                <div className='col-span-5 h-24 items-center overflow-hidden flex justify-center'>
                    <h1 className='line-clamp-3 text-lg font-semibold'>{posts.title}</h1>
                </div>
                <div className='col-span-2 h-24 items-center overflow-hidden flex justify-center'>
                    <h1 className='text-lg font-medium'>{date}</h1>
                </div>
                {isAuthor && (
                    <>
                        <div className='col-span-2 justify-center flex items-center'>
                            <Button className='bg-red-400' onClick={deletePost}>Delete</Button>
                        </div>
                       <div className='col-span-2 justify-center flex items-center'>
  <Button onClick={() => navigate(`/dashboard/edit-post/${posts.$id}`)}>Edit</Button>
</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Item;
