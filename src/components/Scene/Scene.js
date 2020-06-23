import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import "./style.css";
import { useSelector } from "react-redux";
import Model from "./Model";
import Loading from "./Loading";
import { selectLoadedModels } from "../../store/models/selectors";

function Scene() {
  const loadedModels = useSelector(selectLoadedModels);

  return (
    <Canvas
      camera={{ position: [0, 0.5, 1] }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color("#e6e6e6");
      }}
    >
      <ambientLight />
      <Suspense fallback={<Loading />}>
        {loadedModels.map((model, i) => {
          return (
            <Model
              key={Math.floor(Math.random() * 100000)}
              url={model.obj.url}
              mesh={model.obj.mesh}
              position={[i / 4, 0, 0]}
            />
          );
        })}
      </Suspense>
    </Canvas>
  );
}

export default Scene;
