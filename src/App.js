import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route path="/compose" component={} />
        <Route path="/texturing" component={} />
        <Route path="/library" component={} />
        <Route path="/" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
