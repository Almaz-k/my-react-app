import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoApp from './todolist/TodoApp';
import CounterApp from './counterapp/CounterApp';
import UserProfileCard from './userprofilecard/UserProfileCard';
import EventHandlingApp from './EventHandlingAPP/EventHandlingApp';
import FormComponent from './ControlledComponentForm/formComponent';
import ContactForm from './ContactForm/ContactForm';
import SimpleRouting from './RouterExcercise/SimpleRouting';
import SimpleWebApplication from './RouterExcercise/SimpleWebApplication';
import MovieInfo from './RouterExcercise/MovieInfo';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider/>
    ==Redux counter value===
    <Counter/>
    <ToDoApp/>
    <CounterApp/> 
    {/*<CounterApp />*/} 
    <UserProfileCard name ="Berhe" age="30" email="berheteka@gmail.com"/> 
    <EventHandlingApp/>
    <FormComponent/>
    ====form Validation ====
    <ContactForm/>
    === Routing ===
    <SimpleRouting/>
   ===PageNotFound Routhing===
    <SimpleWebApplication/>
   ===Movie details with Route params and query strings===
   <MovieInfo/>
  </React.StrictMode>
  
);
//all toDoApp, CounterApp and UserProfileCard are all child of the index TODOlist
//on userprofilecard age, name and email are the props
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
