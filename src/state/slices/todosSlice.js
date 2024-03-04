import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: null,
  isTodosLoading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTodosAsync.pending, (state) => {
      console.log("incrementAsync.pending");
      state.isTodosLoading=true;
    })
    .addCase(
      getTodosAsync.fulfilled,
      (state, action) => {
        state.isTodosLoading=false;
        state.todos = action.payload;
      }
    );
  },
});



export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    return todos.json();
  }
);

export default todosSlice.reducer;