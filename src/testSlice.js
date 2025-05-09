import { createSlice } from "@reduxjs/toolkit";


export const testSlice=createSlice({
    name:"test",
    initialState:{
        count:"casual"
    },
    reducers:{
        countTest:(state,action)=>{
            state.count = action.payload
        }
    }


})

export const {countTest} = testSlice.actions
export default testSlice.reducer