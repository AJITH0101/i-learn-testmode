import { createSlice } from "@reduxjs/toolkit"

export const selectSlice=createSlice({
    name:"select",
    initialState:{
        topic:0
    },
    reducers:{
        selectTopic:(state,action)=>{
            state.topic += 1
        }
    }

})

export const {selectTopic} = selectSlice.actions
export default selectSlice.reducer