import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../state/slices/feesSlice";
import "./Fees.css";
const Fees = ()=> {
    const[name, setName] = useState("");
    const[month, setMonth] = useState("");
    const[amount, setAmount] = useState("");
    const[students, setStudents] = useState("");

    const dispatch = useDispatch();
    const {fees, isLoading} = useSelector((state)=>state.fees);
    

    function handleSubmit(){
        let id = Math.random(9,999);
        let stuObj = {id:id, name:name, month:month, amount:amount};
        setStudents(stuObj);
        dispatch(addStudent(stuObj));
        handleReset();
    }

    function handleReset()
    {
        setName("");
        setMonth("");
        setAmount("");
    }

    function handleEdit(item)
    {
       
    }

    function handleDelete(item)
    {

    }

    return(
        <div>
            <h2>Student Details</h2>
            <div>Name:<input type = "text" onChange = {(e)=> setName(e.target.value)} value = {name}></input></div>
            <div>Month:<input type = "month" onChange = {(e)=> setMonth(e.target.value)} value = {month}></input></div>
            <div>Amount:<input type = "number" onChange = {(e)=> setAmount(e.target.value)} value = {amount}></input></div>
            <div><button onClick = {handleSubmit}>Submit</button></div>

            <div><h2>Student Fees Details</h2></div>
            <div className="fees-list__row">
                <div className="fess-list__item">Name</div>
                <div className="fess-list__item">Month</div>
                <div className="fess-list__item">Amount</div>
                <div className="fess-list__item">Action</div>
            </div>
            <div>{fees.map((item)=> {
                return <div className="fees-list__row" key = {item.name}>
                            <div className="fess-list__item">{item.name}</div>
                            <div className="fess-list__item">{item.month}</div>
                            <div className="fess-list__item">{item.amount}</div>
                            <div><button onClick = {handleEdit(item)}>Edit</button>
                            <button onClick = {handleDelete(item)}>Delete</button></div>
                        </div>
            })}</div>
        </div>
    )
}
export default Fees;