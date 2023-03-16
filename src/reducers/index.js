const { combineReducers } = require("redux");

const counter = (state=0,action) =>{
    switch(action.type){
        case 'increment': return state+action.payload;
        case 'decrement':return state-action.payload;
        case 'reset' : return 0;
        default : return state;
    }
    /* if(action.type === 'increment'){
        return state + action.payload;
    }
    return state; */
}

const myReducers = combineReducers({counter});
export default myReducers;