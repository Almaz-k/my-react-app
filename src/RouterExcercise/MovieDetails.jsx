import React from 'react';
import {useParams} from 'react-router-dom';
function MovieDetails({match}){
    const {moviename} = match.params;

    return(
        <h1> Wellcome to {moviename}</h1>
    );
}
export default MovieDetails;