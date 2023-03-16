import { useSelector } from "react-redux";

const DivPannel = () =>{
    let counterValue = useSelector(state=>state.counter)
    return(
        <div>The value of the counter is{counterValue}</div>
    )
}
export default DivPannel;