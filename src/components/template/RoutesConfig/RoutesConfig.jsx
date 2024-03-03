import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Users from "../../pages/Users/Users";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import ContextAPI from "../../pages/ContextAPI/ContextAPI";
  
const RouteConfig = function () {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} exact={true} /> 
        <Route path="/users" element={<Users />} exact={true} />   
        <Route path="/context-api" element={<ContextAPI />} exact={true} />   
        <Route element={<ErrorPage/>} path="*"/>   
      </Routes>
      
  );
};
export default RouteConfig;
