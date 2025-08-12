import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import service from '../../appwrite/config';
import { deletePhoto, getPhotos, getPhotosByQuery } from '../../store/gallerySlice';
import { useNavigate } from 'react-router-dom';
import { Query } from 'appwrite';
function Allphoto() {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {photos}=useSelector((state)=>state.gallery)
    const userData = useSelector((state)=>state.auth.userData)||{};
    const userID = userData.userData.$id;
    
    useEffect(()=>{
    
    if (userID) {
    dispatch(getPhotosByQuery([
      Query.equal("userID", userID),
      Query.orderDesc("$createdAt")
    ]));
  }


    },[userID])


    const handleDeletePhoto = (id)=>{
      dispatch(deletePhoto(id))
    }

    return (
        <>
        
        <div className="w-full h-auto">
      <h1 className="text-2xl pt-2 pb-8 font-semibold ">All Posts</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      { photos.length == 0 ?(<h1>no available photos</h1>):(
        photos.map((photo, index)=>(
          
          <div className='relative h-auto  '>
        <img class="h-64 w-full rounded-lg" src={service.getFilePreview(photo.galleryImage)} alt=""/>
        <div className='mt-2 space-y-2'>
          <h1 className='text-lg  text-black font-medium leading-2'>{photo.title}</h1>
        <h1 className='text-sm font-normal m-0 p-0'>{photo.status =="true" ? (<span className='text-green-700'>Visible</span> ):(<span className='text-red-700'>Hidden</span>)}</h1>
        <button className='w-full  py-2 bg-green-300 text-lg font-semibold' 
        onClick={()=>handleDeletePhoto(photo.$id)}
        >Delete</button>
          </div>
    </div>)
        ))
      }
      </div>
     </div>
        
        </>



        
    )
}

export default Allphoto
