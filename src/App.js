import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
