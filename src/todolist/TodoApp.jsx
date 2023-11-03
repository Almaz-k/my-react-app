import React, {useState} from "react";
import './ToDoApp.css';
import CounterApp from '../counterapp/CounterApp'
function ToDoApp(){
    const [tasks, setTasks]= useState([]);// holds all input 
    const [inputValue,setInputValue]= useState('');//only sets the inputvalue one value at time
    ////const list=[];// an array to hold the value of inputvalue, 
     //const fruits=[];//any fruit added here will be the first arry below including 'orang'
    //const copyFruits=[...fruits,'orange'] == ['orange'];
    
    function onDelete(task){
        const index =tasks.indexOf(task);
        console.log(`am inside on Delete check index`, index);
        tasks.splice(index,1);
        setTasks([...tasks]);//will activate remove or delete tasks
    
    }

    function onClick (){
        ////list.push(inputValue);//shoping the list will be pushed on array list/Add one element
        //console.log(`my list:${list}`);// this will upate the entry
        //setTasks(list);
        //console.log(`my list:${tasks}`);
        setTasks([...tasks,inputValue]);//...(spread)operator 
    }

    function onChange(event){
        setInputValue(event.target.value);
    }
        return(
        <>
        <div className ="wrapper">
        <input type="text" onChange={onChange}/>
        <button type="submit" onClick={onClick}>
         Add Task</button>
          <br/>
        <ul className="todolist">
             {tasks.map((task,index)=>{
             return (// return will make the list add functional
             <>
             <li key={index} id={index}>{task}</li>
             <input type="checkbox"/> 
             <button onClick={()=>onDelete(task)}>Delete</button>
             </> 
             // how do we style it and put the events in one line? by adding styling on css


             )
           })} 
        </ul>
        </div>
        <counterApp/>
        </>
    );
    //    <CounterApp/> on index this indicates countrapp as paretn
    //{/*<CounterApp />*/}  //indicates counter as chiled of todoapp

}
export default ToDoApp

