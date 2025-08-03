// //we can  also can write in another folder called featured

// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {  
  
//    todos: []
// }

// const todoSlice = createSlice({

//     name:"todo",
//     initialState,
//     reducers:
//     {
//       todos:(state , action)=>{
        
//         state.todos = action.payload;
//       },
//       deleteTodos:(state,action , id)=>{
//         state.todos=state.todos.filter((todo)=>todo.$id !== id)
//       }
//     }

// })

// // export const {login , logout } = authSlice.actions;
// export default todoSlice.reducer;