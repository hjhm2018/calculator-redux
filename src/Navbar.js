import React from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Porosity from './Porosity';
import Imc from './Imc';
import Conversions from './Conversions';
import Home from './Home';

function NavBar() {
  return (
    <Router>
        <div className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/porosity">Porosity</Link>
            <Link to="/conversions">Conversions</Link>
            <Link to="/imc">BMI</Link>
        </div>

        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/porosity" component={Porosity}></Route>
            <Route exact path="/conversions" component={Conversions}></Route>
            <Route exact path="/imc" component={Imc}></Route>
        </Switch>

    </Router>
  );
}

export default NavBar;