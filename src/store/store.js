import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import postsReducer  from './postSlice'
import galleryReducer from './gallerySlice'
const store = configureStore({
  reducer:{
   auth: authReducer,
   posts:postsReducer,
   gallery:galleryReducer,
  }
})

export default store;