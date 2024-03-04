import { addcolor, deletecolor } from "../../../state/slices/favcolorSlice";
import React from "react";
import { useDispatch, useSelector} from "react-redux";
function Favcolor()
{
    const[usercolor, setusercolor] = React.useState("");
    const {colors} = useSelector((state) => {
        console.log(state); 
        return  state.favcolor}
        );
    const dispatch = useDispatch();
    return(
        <>
            <div>
                Favorite color:
                <input type = "text" value = {usercolor} onChange = {(e)=>setusercolor(e.target.value)}/>
            </div>
            <div>        
                <button onClick={() => dispatch(addcolor(usercolor))}>Add Color</button>
                <button onClick={() => dispatch(deletecolor(usercolor))}>Delete Color</button>
            </div>
            <div>
                {colors.map(item => {
                    return <div>{item}</div>
                })}
            </div>

        </>
    )
}
export default Favcolor;