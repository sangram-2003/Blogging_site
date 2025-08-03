//we can  also can write in another folder called featured

import { createSlice } from "@reduxjs/toolkit";


const initialState = {  
    status: false ,  // false means user not login 
    userData: null  //  null for there have no userdata for not login 
}

const authSlice = createSlice({

    name:"auth",
    initialState,
    reducers:
    {
      login:(state , action)=>{
        state.status= true;
        state.userData = action.payload;
      },

      logout: (state , action)=>{
           state.status= false;
        state.userData =null;
      }
    }

})

export const {login , logout } = authSlice.actions;
export default authSlice.reducer;