import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Error from "./pages/Error";
import TopMenuBar from "./component/TopMenuBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopMenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
