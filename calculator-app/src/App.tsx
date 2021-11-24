import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"

//Pages
import Calculator from "./pages/Calculator"
import AnswerPage from "./pages/AnswerPage"



class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={Calculator}/>
              <Route exact path="/AnswerPage" component={AnswerPage}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>

    )
  }
}

export default App;