import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"

//Pages
import LandingPage from "./pages/LandingPage"



class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>

    )
  }
}

export default App;