import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  alarmsList: [{name: "wake up", time :"6"}],
  isLoading: false,
};
const alarmSlice = createSlice({
    name: "alarm",
    initialState,
    reducers: {
      addAlarm: (state,action) => {
        const newAlarm = action.payload;
      state.alarmsList.push(newAlarm);
      },
      deleteAlarm: (state,action) => {
        const newAlarm = action.payload;
         state.alarmsList = state.alarmsList.filter(item => {
           return item.name !== newAlarm.name && item.time !== newAlarm.time ;
        })
      },
      
    },});
    export const { addAlarm, deleteAlarm,  } = alarmSlice.actions;

export default alarmSlice.reducer;