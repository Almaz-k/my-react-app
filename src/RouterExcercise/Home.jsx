
import React from 'react';
import {Link} from'react-router-dom';
function Home(){
    return(
        <>
        <h1>Wellcome to the Home Page of Movies </h1>
        <ul>
            <li><Link to="movies/Revenge?writer=Mike Kelly&year=2012"> Revenage </Link> </li>
            <li><Link to="movies/Breaking Bad"> Breaking Bad </Link></li>
            <li> <Link to="movies/Women King"> Women King </Link></li>
        </ul>
        </>
    );
}
export default Home;