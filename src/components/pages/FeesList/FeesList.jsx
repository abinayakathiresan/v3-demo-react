import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../../../state/slices/feesSlice";

const FeesList  = ()=> {

    const {fees, isLoading} = useSelector((state)=>state.fees);
    const nav = useNavigate();
    const dispatch = useDispatch();
    

    const handleEdit = (item)=> {
        nav("/studentfees/edit/"+item.id);
    }

    function handleDelete(item)
    {
        dispatch(deleteStudent(item));
    }

    return(
        <div>
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
                        <div><button onClick = {()=>handleEdit(item)}>Edit</button>
                        <button onClick = {()=>handleDelete(item)}>Delete</button></div>
                    </div>
        })}</div>
    </div>)
}
export default FeesList;