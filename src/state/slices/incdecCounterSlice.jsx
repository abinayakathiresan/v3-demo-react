import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    count:0, isLoading: false
};

const incdecCounterSlice = createSlice({
    name: "incdecCounter",
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    }
})

export const { increment, decrement} = incdecCounterSlice.actions;

export default incdecCounterSlice.reducer;