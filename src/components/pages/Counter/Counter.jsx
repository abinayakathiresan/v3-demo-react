import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    incrementByAmount,
  } from "../../../state/slices/counterSlice";
import "./Counter.css";
function Counter(){
    const {value: count, isLoading} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {isLoading ?<div>Loading...</div>:<h2>{count}</h2>}
      <div className="row">
        <div className="col-2">
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
        </div>
        <div className="col-2">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
export default Counter;