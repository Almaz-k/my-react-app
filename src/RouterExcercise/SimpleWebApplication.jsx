
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router, Routes,
Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function SimpleWebApplication(){
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home </Link>
                    </li>
                    <li>
                        <Link to ="/Contact"> Contact</Link>
                    </li>
                    <li>
                        <Link to ="News"> News</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path ="/"component={Home}/>
                <Route path= "/Contact" component={Contact}/>
                <Route  component={PageNotFound}/>
            </Routes>
        </Router>
    );
}

export default SimpleWebApplication;