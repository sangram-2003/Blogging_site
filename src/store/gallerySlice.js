
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import service  from "../appwrite/config";
import { Query } from "appwrite";

export const  createGallery  = createAsyncThunk(' createGallery', async(postData)=>{
    const res = await service.createGallery(postData);
    console.log("upload photo",res)
    return res;
})

export const getPhotos = createAsyncThunk('getPhotos', async () => {
  const res = await service.getPhotos();
  console.log("Appwrite getPhotos response:", res);
  return res.documents;
});

export const getPhotosByQuery = createAsyncThunk('getPhotosByQuery', async (queries) => {
  const res = await service.getPhotosByQuery(queries);
  console.log("Appwrite getPhotosByQuery response:", res);
  return res.documents;
});

export const deletePhoto = createAsyncThunk("deletePhoto",  async(id)=>{
    await service.deletePhoto(id);
     
    return id;
})


const initialState = {  
  
   photos:[],
   isLoading :false ,
   isError: null 

}

const gallerySlice = createSlice({

    name:"gallery",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(createGallery.fulfilled , (state , action)=>{
            state.photos.push(action.payload);
        })
        
        // for getposts
        .addCase(getPhotos.pending , (state , action)=>{
            state.isLoading = true

        })
        .addCase(getPhotos.fulfilled , (state , action )=>{
            state.isLoading = false ;
            state.photos = action.payload;
        })
        .addCase(getPhotos.rejected , (state , action)=>{
            state.isLoading = true;
            state.isError= action.error.message;
        })


        .addCase(getPhotosByQuery.pending , (state , action)=>{
            state.isLoading = true

        })
        .addCase(getPhotosByQuery.fulfilled , (state , action )=>{
            state.isLoading = false ;
            state.photos = action.payload;
        })
        .addCase(getPhotosByQuery.rejected , (state , action)=>{
            state.isLoading = false;
            state.isError= action.error.message;
        })

        .addCase(deletePhoto.fulfilled , (state  , action )=>{
            state.photos = state.photos.filter(photo => photo.$id !==action.payload )
        })

  
    }

})


export default gallerySlice.reducer;