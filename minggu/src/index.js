import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import HelloWorld from './page/HelloWorld';
import Dashboard from './page/Dashboard';
import Login from './page/Login';

import { Route,BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import './index.css';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">HelloWorld</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={HelloWorld}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={Login}/>


            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);
