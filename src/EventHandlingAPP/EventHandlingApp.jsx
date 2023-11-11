//what to do? ceating Eventhandlingapp functional component 
//how to do ?? handling event by adding initialized state variable message

import React, { useState } from "react";
function EventHandlingApp(){//initialize satet for the text message
 const [paragraph,setParagraph]=
  useState('functional component');
 //const handelButtonClick=()=>{//implmneting event handler function
 function onClick(){
    setParagraph('Button Clicked');
 }   

 //update state when button is clicked
 return(   
        <>
        <p> {paragraph} </p>
        <button onClick={onClick}> Click me </button>
        </>
    )
}
export default EventHandlingApp;

