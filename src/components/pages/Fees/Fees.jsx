import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent} from "../../../state/slices/feesSlice";
import "./Fees.css";
import { useNavigate, useParams } from "react-router-dom";

const Fees = ()=> {
    const[name, setName] = useState("");
    const[month, setMonth] = useState("");
    const[amount, setAmount] = useState("");
    const[students, setStudents] = useState("");

    const dispatch = useDispatch();
    const nav = useNavigate();
    let {action, id} = useParams();
    const {fees, isLoading} = useSelector((state)=>state.fees);
    
    let studentObj =  fees && fees.find((item)=> {
        return item.id == id;
    });
console.log(studentObj);
    
    useEffect(()=>{       
        studentObj && setName(studentObj.name);
        studentObj && setMonth(studentObj.month);
        studentObj && setAmount(studentObj.amount);
    },[studentObj]);
            

    function handleSubmit(){
        if(action === "edit")
        {
            let existingstudentObj = {...studentObj, name,month,amount};
            dispatch(editStudent(existingstudentObj));

        }
        else{
            let id = Math.random(9,999);
            let stuObj = {id:id, name:name, month:month, amount:amount};
            setStudents(stuObj);
            dispatch(addStudent(stuObj));
            
        }
        nav("/feeslist");
        handleReset();
    }

    function handleReset()
    {
        setName("");
        setMonth("");
        setAmount("");
    }

   
    return(
        <div>
            <h2>Student Details</h2>
            <div>Name:<input type = "text" onChange = {(e)=> setName(e.target.value)} value = {name}></input></div>
            <div>Month:<input type = "month" onChange = {(e)=> setMonth(e.target.value)} value = {month}></input></div>
            <div>Amount:<input type = "number" onChange = {(e)=> setAmount(e.target.value)} value = {amount}></input></div>
            <div><button onClick = {handleSubmit}>Submit</button></div>
            
        </div>
    )
}
export default Fees;