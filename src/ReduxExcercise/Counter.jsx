// we use Redux to share data among components 
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Counter(){
    const Counter= useSelector((state)=>state);
    const dispatcher=useDispatch();
    //action types
    const INCREMENT= 'INCREMENT';
    const DECREMENT= 'DECREMENT';
    //action creators
    function increment(currentValue){
        return{
            type : INCREMENT,
            payload: currentValue,
        }
    }

    function decrement(currentValue){
        return{
            type : DECREMENT,
            payload: currentValue,
        }
    }   

    function onIncrement(){
        dispatcher(increment());
    }
    
    function onDecrement(){
        dispatcher(decrement());
    }
    return (
        <>
        <p> {Counter}</p>
        <button type="button" onClick={onIncrement}>
            INCREMENT
         </button>
        <button type="button" onClick={onDecrement}>
            DECREMENT 
         </button>
        </>
     
    ) 
}
export default Counter;

