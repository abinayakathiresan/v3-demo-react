import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getTodosAsync,
  } from "../../../state/slices/counterSlice";
import "./Todos.css";
function Todos(){
    const {todos, isTodosLoading} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTodosAsync());
  },[])

  const renderTodos = () => {
    return todos && todos?.map(item=>{
        return <div className="row">
            <div className="col-1">
                {item.id}
            </div>
            <div className="col-2">
                {item.title}
            </div>
            <div className="col-2">
                {item.completed?"Active":"Inactive"}
            </div>
        </div>
    })
  }
  return (
    <div>
      {isTodosLoading ?<div>Loading...</div>:<div className="todos__list">{renderTodos()}</div>}
       
    </div>
  );
}
export default Todos;