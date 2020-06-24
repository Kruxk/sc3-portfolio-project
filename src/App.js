import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Compose from "./pages/Compose";
import Texture from "./pages/Texture";
import Library from "./pages/Library";
import Home from "./pages/Home";
import { BooleanKeyframeTrack } from "three";
// import Content from "./components/Content";

function App() {
  const [scene, setScene] = useState({ display: "none" });

  const handleScene = (action) => {
    if (action) {
      setScene({ display: "block" });
    } else {
      setScene({ display: "none" });
    }
  };

  return (
    <div className="App">
      <Navbar />
      {/* <Compose style={scene} /> */}
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
