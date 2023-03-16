import { useDispatch } from "react-redux";
import {increment,decrement,reset} from "../action";

const MyButton = ()=>{
    let dispatch = useDispatch();
    return(
        <div>
        <button onClick={()=>dispatch(increment(1))}>Increment</button>
        <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}
export default MyButton;