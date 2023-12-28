import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    sourceIndex:null,
    destinationIndex:null,
    data:[],
    isOpen:false
}
export const tableSlice = createSlice({
    name:"tableSlice",
    initialState,
    reducers:{
        setData(state,action){
            state.items=action.payload;
        },

        setIndex(state,action){
            state.sourceIndex=action.payload.sourceIndex;
            state.destinationIndex=action.payload.destinationIndex;
        },
        setRows(state){
            const { data, items, sourceIndex } = state;
            // Clone the data array and push the item from items
            const newData = [...data, items[sourceIndex]];
          
            // Return the updated state with the new data
            return {
              ...state,
              data: newData,
            };
        },
        handleOpen(state){
           
            state.isOpen= true;
        },
        handleClose(state){
            state.isOpen=false;
        }
    }

})

export const {setData,setIndex,setRows,handleOpen,handleClose}= tableSlice.actions;