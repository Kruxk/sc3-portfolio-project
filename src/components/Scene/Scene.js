import React from "react";
import { Canvas } from "react-three-fiber";
import Model from "./Model";
import * as THREE from "three";
import "./style.css";

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 10, 15] }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color("#373737");
      }}
    >
      <ambientLight />
      <Model />
    </Canvas>
  );
}

export default Scene;
