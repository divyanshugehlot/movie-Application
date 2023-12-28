import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { movieSlice } from "../redux/movieSlice";



const rootReducer = combineReducers({
  movies:movieSlice.reducer
})

export const store = configureStore(
  {
    reducer: rootReducer
  },
  
);