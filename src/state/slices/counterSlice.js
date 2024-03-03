import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isLoading: false,
  todos: null,
  isTodosLoading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(incrementAsync.pending, (state) => {
      console.log("incrementAsync.pending");
      state.isLoading=true;
    })
    .addCase(
      incrementAsync.fulfilled,
      (state, action) => {
        state.isLoading=false;
        state.value += action.payload;
      }
    ).addCase(getTodosAsync.pending, (state) => {
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

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const getTodosAsync = createAsyncThunk(
  "counter/getTodosAsync",
  async () => {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    return todos.json();
  }
);
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;