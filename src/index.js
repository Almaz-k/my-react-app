import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoApp from './todolist/TodoApp';
import CounterApp from './counterapp/CounterApp';
import UserProfileCard from './userprofilecard/UserProfileCard';
import EventHandlingApp from './todolist/EventHandlingAPP/EventHandlingApp';
import FormComponent from './ControlledComponentForm/formComponent';
import ContactForm from './ContactForm/ContactForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoApp/>
    <CounterApp/> 
    {/*<CounterApp />*/} 
    <UserProfileCard name ="Berhe" age="30" email="berheteka@gmail.com"/> 
    <EventHandlingApp/>
    <FormComponent/>
    ====form Validation ====
        <ContactForm/>
  </React.StrictMode>
);
//all toDoApp, CounterApp and UserProfileCard are all child of the index TODOlist
//on userprofilecard age, name and email are the props
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
