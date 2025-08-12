import React from 'react';
import Button from './Button';
import service from '../../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Item({ posts , onDelete }) {
    const navigate = useNavigate();

    if (!posts) return null;

    const date = new Date(posts.date).toDateString();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = posts && userData ? posts.userId === userData.$id : false;

    const deletePost = () => {
        if (!posts) return;
        service.deletePost(posts.$id).then((status) => {
            if (status) {
                service.deleteFile(posts.featuredImage);
                onDelete();
            }
        });
        
    };

    return (
        <div className="w-full">
            <div className="w-full rounded-lg p-3 bg-black/5 border border-gray-300 shadow-lg flex flex-col lg:flex-row items-start lg:items-center ">
                {/* Left section (Image + Info) */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-9/12 gap-4">
                    {/* Image */}
                    <div className="w-full lg:w-auto flex justify-center">
                        <img
                            src={service.getFilePreview(posts.featuredImage)}
                            className="h-60 lg:h-24 lg:w-24 w-full object-cover rounded-lg"
                            alt="post preview"
                        />
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col gap-1  w-full sm:w-full md:w-full md:mr-10 lg:w-full ">
                        {/* Title */}
                        <h1 className="text-lg font-semibold line-clamp-2 text-center lg:text-left">{posts.title}</h1>

                        {/* Status + Trending */}
                        <div className="flex flex-wrap gap-4 text-sm justify-center lg:justify-start">
                            <span className={posts.status ? 'text-green-700' : 'text-red-700'}>
                                {posts.status == "true" ? 'Visible' : 'Hidden'}
                            </span>
                            <span className={posts.trending ? 'text-green-700' : 'text-red-700'}>
                                {posts.trending =="true" ? 'Trending' : 'Not Trending'}
                            </span>
                            <span className="text-gray-700">{date}</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                {isAuthor && (
                    <div className="w-full mt-2 lg:w-3/12 flex flex-col sm:flex-row justify-center lg:justify-end gap-2">
                        <Button className="bg-red-400 w-full sm:w-auto" onClick={deletePost}>Delete</Button>
                        <Button className="w-full sm:w-auto" onClick={() => navigate(`/dashboard/edit-post/${posts.$id}`)}>Edit</Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Item;
