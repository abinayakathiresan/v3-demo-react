import React from "react";
import { addAlarm, deleteAlarm } from "../../../state/slices/alarmSlice";
import { useDispatch, useSelector } from "react-redux";
function Alarm()
{
    const[name, setName] = React.useState("wake up");
    const[time, setTime] = React.useState("6");
    const {alarmsList} = useSelector((state) => {
        console.log(state); 
        return  state.alarmReducer}
        );
    const dispatch = useDispatch();

    return (
        <>
        <div>
            Alarm Name:<input type = "text" value = {name} onChange = {(e)=>setName(e.target.value)}/>
        </div>
        <div>
            Alarm Time:<input type = "time" value = {time} onChange = {(e)=>setTime(e.target.value)}/>
        </div>
        <div>
            <button onClick = {() => dispatch(addAlarm({name, time}))}>Add Alarm</button>
            <button onClick = {() => dispatch(deleteAlarm({name, time}))}>Delete Alarm</button>

        </div>
        <div>
        {alarmsList.map(item => {
                    return <div>{item.name} {item.time }</div>
                })}
        </div>
        </>
    )
}
export default Alarm;