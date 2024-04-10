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
        },
        editStudent: (state, action) => {
            state.fees = state.fees.map(item=>{
              return item.id == action.payload.id? action.payload : item;
            })
            
        },
        deleteStudent: (state, action) => {
            state.fees = state.fees.filter(item=>{
              return item.id !== action.payload.id;
            })
            
        }
    },
})
export const {addStudent, editStudent,deleteStudent} = feesSlice.actions;
export default feesSlice.reducer;