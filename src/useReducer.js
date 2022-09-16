import React, { useReducer } from 'react';


const initialState = 0;

const reducer = (state, action) => {
    switch (action.type)
    {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
        }
    }
    
function UseReducer() {
   const [count,dispatch]= useReducer(reducer,initialState)
    return (
      <div>
        count- {count}
        <button onClick={() => dispatch({type:'increment',value:3})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
      </div>
    );
}

export default UseReducer;