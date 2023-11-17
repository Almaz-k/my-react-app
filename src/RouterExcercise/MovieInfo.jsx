import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MoveDetails from './MovieDetails';


function MovieInfo(){

return(
    <Router>
        <home/>
        <Routes>
            <Route path="/movies/:moviename" component={MoveDetails}/>
        </Routes>
    </Router>
);
}
export default MovieInfo; 