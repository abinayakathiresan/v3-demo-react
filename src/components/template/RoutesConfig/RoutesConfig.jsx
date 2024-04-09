import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Users from "../../pages/Users/Users";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import ContextAPI from "../../pages/ContextAPI/ContextAPI";
import Counter from "../../pages/Counter/Counter";
import Todos from "../../pages/Todos/Todos";
import Favcolor from "../../pages/Favcolor/Favcolor";
import Alarm from "../../pages/Alarm/Alarm";
import IncDec from "../../pages/IncDec/IncDec";

  
const RouteConfig = function () {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} exact={true} /> 
        <Route path="/users" element={<Users />} exact={true} />   
        <Route path="/context-api" element={<ContextAPI />} exact={true} />   
        <Route path="/counter" element={<Counter />} exact={true} />   
        <Route path="/todos" element={<Todos />} exact={true} /> 
        <Route path="/favcolor" element={<Favcolor/>} exact={true} /> 
        <Route path="/alarm" element={<Alarm/>} exact={true} /> 
        <Route path="/incdeccounter" element={<IncDec/>} exact={true} /> 
          
        <Route element={<ErrorPage/>} path="*"/>   
      </Routes>
      
  );
};
export default RouteConfig;
