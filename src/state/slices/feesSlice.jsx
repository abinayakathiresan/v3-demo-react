import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fees : [{id: 123, name: "abinaya", month: 1, amount: 500}] ,
    isLoading: false
};

const feesSlice = createSlice({
    name: "fees",
    initialState,
    reducers: {
        addStudent: (state, action)=> {
            let newStudent = action.payload;
            state.fees.push(newStudent);
        }
    },
})
export const {addStudent} = feesSlice.actions;
export default feesSlice.reducer;