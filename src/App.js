import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Compose from "./pages/Compose";
import Texture from "./pages/Texture";
import Library from "./pages/Library";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/compose" component={Compose} />
        <Route path="/texturing" component={Texture} />
        <Route path="/library" component={Library} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
