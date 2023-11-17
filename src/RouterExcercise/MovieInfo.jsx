import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MoveDetails from './MovieDetails';


function MovieInfo(){

return(
    <Router>
        <home/>
        <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/movies/:moviename" Component={MoveDetails}/>
        </Routes>
    </Router>
);
}
export default MovieInfo; 