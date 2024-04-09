import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../state/slices/incdecCounterSlice";

const IncDec = ()=> {
    const {count, isLoading} = useSelector((state) => state.incdecCounter);
    const dispatch = useDispatch();

return(
<>
<div>Count:{count}</div>
    <div><button onClick={() => dispatch(increment())}>Increment Count</button></div>
    <div><button onClick = {()=> dispatch(decrement())}>Decrement Count</button></div></>
)
}
export default IncDec;