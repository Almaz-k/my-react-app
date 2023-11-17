
import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

function SimpleRouting(){
    return(
        <>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about"> About Us</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path ="/" exact Component={Home}/>
                <Route path ="/about" exact Component={About}/>
            </Routes>
        </Router>
        </>
    )
}

export default SimpleRouting;