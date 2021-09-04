import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Dats from './components/Dates/Dats';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path ='/'>
          <Header />
          <Images />
        </Route>
        <Route path = "/stats">
          <Dats/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
