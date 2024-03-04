import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: ["red"],
  isLoading: false
};
const favcolorSlice = createSlice({
    name: "favcolor",
    initialState,
    reducers: {
      addcolor: (state,action) => {
        const newcolor = action.payload;
      state.colors.push(newcolor);
      },
      deletecolor: (state,action) => {
        const currentcolor = action.payload;
         state.colors = state.colors.filter(item => {
           return item !== currentcolor;
        })
      },
      
    },});
    export const { addcolor, deletecolor,  } = favcolorSlice.actions;

export default favcolorSlice.reducer;