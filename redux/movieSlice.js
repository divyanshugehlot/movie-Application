import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:null,
}
export const movieSlice = createSlice({
    name:"movieSlice",
    initialState,
    reducers:{
        setData(state,action){
            state.data=action.payload;
            console.log(state.data,"data movie")
        },

    }

})

export const {setData}= movieSlice.actions;