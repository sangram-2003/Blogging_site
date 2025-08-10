
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import service  from "../appwrite/config";
import { Query } from "appwrite";

export const  createGallery  = createAsyncThunk(' createGallery', async(postData)=>{
    const res = await service.createGallery(postData);
    console.log("upload photo",res)
    return res;
})

export const getPhotos  = createAsyncThunk('getPhotos', async()=>{
    const res = await service.getPhotos()
    console.log("get photos " , res)
    return res.documents;
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
            state.posts.push(action.payload);
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

  
    }

})


export default gallerySlice.reducer;