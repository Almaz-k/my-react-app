// analysis
//what todo? display counter values on screen
//buttons to increment and decrement and reset the counter

// how to do, use the state  and functional component from precious values 

import React, {useState} from "react";
function CounterApp(){
    const[counter,setCounter]=useState(0);
    let[currentValue, setCurrentValue]=useState(0);
    function increment(){
        //setCounter(counter+1);
        setCounter(++currentValue);
     //setCounter(++counter);// counter ++ =counter=counter ++
     //++ counter=counter +1
     }
   function decrement(){
     //setCounter(counter-1); //this works
     setCounter(--currentValue);
     //setCounter(--counter);

    }
   function reset(){
     setCounter(0);
   }
    function setCurrentValueFromInput(e){
        setCurrentValue(parseInt(e.target.value));//parseint is passing the inputvalue to integer / string as the input accepts string
    }     
    return(
        <>
        <p>{counter}</p>
        <input type="text" nmae="counter" onChange={(e)=>setCurrentValueFromInput(e)}/>
        <button type="button" onClick={increment}>increment</button>
        <button type="button" onClick={decrement} >decrement</button>
        <button type="button" onClick={reset} >reset</button>
        </>
 
    )
}    
export default CounterApp
