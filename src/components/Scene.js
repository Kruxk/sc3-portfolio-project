import React from "react";
import { Canvas } from "react-three-fiber";
import Model from "./Model";
// import "./style.css";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 50, 0] }}>
      <Model />
    </Canvas>
  );
}

export default Scene;
