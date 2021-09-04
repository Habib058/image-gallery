import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Graph from './components/Graph/Graph';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <Graph/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
