import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"authentication",
    initialState: {
    value: 0,
    },
    reducers:{
        increment: (state) => {
            state.value += 1
        }
    }

})

export const {increment} = authSlice.actions
export default authSlice.reducer