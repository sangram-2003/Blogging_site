
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import service  from "../appwrite/config";
import { Query } from "appwrite";

export const createPost  = createAsyncThunk('createPost', async(postData)=>{
    const res = await service.createPost(postData);
    console.log("create post",res)
    return res;
})

export const getPosts  = createAsyncThunk('getPosts', async()=>{
    const res = await service.getPosts()
    console.log("get posts " , res)
    return res.documents;
})
export const getPost =  createAsyncThunk('getPost',async (slug)=>{
    const res = await service.getPost(slug);
    return res;
})


export const getRecentPosts = createAsyncThunk('getRecentPosts', async()=>{
    const res = await service.getRecentPosts();
    return res.documents;
})

export const updatePost =  createAsyncThunk('updatePost',async ({ slug, data })=>{
    const res = await service.updatePost(slug, data);
    return res;
})

export const deletePost = createAsyncThunk('deletePost', async(slug)=>{
    await service.deletePost(slug);
    return slug;
})

export const getPostsByQuery = createAsyncThunk('getPostsByQuery', async(query)=>{
    const res = await service.getPostsByQuery(query);
    return res.documents;
})



const initialState = {  
  
   posts: [],
   post:[],
   recentPosts:[],
   isLoading :false ,
   isError: null 

}

const postSlice = createSlice({

    name:"posts",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(createPost.fulfilled , (state , action)=>{
            state.posts.push(action.payload);
        })
        
        // for getposts
        .addCase(getPosts.pending , (state , action)=>{
            state.isLoading = true

        })
        .addCase(getPosts.fulfilled , (state , action )=>{
            state.isLoading = false ;
            state.posts = action.payload;
        })
        .addCase(getPosts.rejected , (state , action)=>{
            state.isLoading = true;
            state.isError= action.error.message;
        })

        // for getpost

        .addCase(getPost.pending , (state , action)=>{
            state.isLoading = true

        })
        .addCase(getPost.fulfilled , (state , action )=>{
            state.isLoading = false ;
            state.post = action.payload;
        })
        .addCase(getPost.rejected , (state , action)=>{
            state.isLoading = true;
            state.isError= action.error.message;
        })
        //getRecentPosts

        .addCase(getRecentPosts.pending,(state)=>{
            state.isLoading = true ;
        })
        .addCase(getRecentPosts.fulfilled , (state , action)=>{
            state.isLoading = false ;
            state.recentPosts = action.payload;
        })
        .addCase(getRecentPosts.rejected , (state , action)=>{
            state.isLoading = true;
            state.isError=action.error.message;
        })
        //get post by custom quries
         .addCase(getPostsByQuery.pending , (state)=>{
            state.isLoading=true;
         } )
         .addCase(getPostsByQuery.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.posts = action.payload;
         })
         .addCase(getPostsByQuery.rejected , (state,action)=>{
            state.isLoading = true;
            state.isError=action.error.message;
         })
        //
        .addCase(updatePost.fulfilled , (state , action)=>{
            state.posts = state.posts.map((post) =>
          post.$id === action.payload.$id ? action.payload : post
        );

        

        })

        //

        .addCase(deletePost.fulfilled , (state  , action )=>{
            state.posts = state.posts.filter(post => post.$id !==action.payload )
        })
    }

})

// export const {login , logout } = authSlice.actions;
export default postSlice.reducer;