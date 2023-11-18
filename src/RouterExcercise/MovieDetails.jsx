import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
function MovieDetails({match}){
    const {moviename} = useParams();
    const location= useLocation();
    let query = new URLSearchParams(location.search);
    const writer = query.get('author');
    const year = query.get('year');
    return(
        <h1> Wellcome to {moviename}
        written by {writer} in {year} 
        </h1>
    );
}
export default MovieDetails;