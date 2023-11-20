import React, {useState} from "react";
import { useSelector } from "react-redux";
function FormComponent(){
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const Counter = useSelector((counter)=>counter);
    function onChange(event){
        setName(event.target.value);
    }

    function onEmailChange(event){
        setEmail(event.target.value);
    }

    return(
        <>
        <p> counter value form Redux:{Counter} </p> 
        name:
        <input type="text" onChange={(e) => onChange(e)} />
        email: 
        <input type="email" onChange={(e) => onEmailChange(e)} />
        <p>output name:{name}</p>
        <p>output email:{email}</p>
        </>
    );

}

export default FormComponent;