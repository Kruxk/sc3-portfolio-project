import React from "react";
import { Canvas } from "react-three-fiber";
import Model from "./Model";
import * as THREE from "three";
import "./style.css";
import { useSelector } from "react-redux";
import { selectLoadedModels } from "../../store/models/selectors";

function Scene() {
  const loadedModels = useSelector(selectLoadedModels);
  console.log(loadedModels);
  return (
    <Canvas
      camera={{ position: [0, 0.4, 0.5] }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color("#e6e6e6");
      }}
    >
      <ambientLight />
      {loadedModels.map((model) => (
        <Model scene={model} position={[0, 0, 0]} />
      ))}
    </Canvas>
  );
}

export default Scene;
