import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import todosReducer from "./slices/todosSlice";
import favcolorReducer from "./slices/favcolorSlice";
import alarmReducer from "./slices/alarmSlice";
import incdecCounterReducer from "./slices/incdecCounterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    favcolor: favcolorReducer, 
    alarmReducer: alarmReducer,
    incdecCounter: incdecCounterReducer,
  },
});

 