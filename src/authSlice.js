import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"authentication",
    initialState: {
    value: 0,
    mail:"",
    },
    reducers:{
        increment: (state,action) => {
            state.value += action.payload
        },
        mailid:(state,action)=>{
            state.mail= action.payload
        }
    }

})

export const {increment, mailid} = authSlice.actions
export default authSlice.reducer