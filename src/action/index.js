const increment = (val)=>{
    return {
        type:'increment',
        payload: val
    }
}
const decrement = (val) =>{
    return{
        type:'decrement',
        payload: val
    }
}
const reset = () =>{
    return{
        type:'reset'
    }
}
export {increment,decrement,reset};