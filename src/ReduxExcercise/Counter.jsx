
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import {increment, decrement} from '../Actions';
function Counter(){
    dipatcher(increament())
    //action types
    const INCREMENT= 'INCREMENT';
    const DECREMENT= 'DECREMENT';
    //action creators
    function increament(currentValue){
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
    // create reducer
    function counterReducer(state =0, action){
        switch(action.type){
            case INCREMENT:
                return ++state;
            case DECREMENT:
                return --state;
                
        }



    }
    return (
        <>
        <p> {Counter}</p>
        <button type="button" onClick={counterReducer}></button>
    
        </>
        
    )
    export default Counter;

}

