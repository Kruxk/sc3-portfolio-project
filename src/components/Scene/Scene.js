import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import "./style.css";
import { useSelector } from "react-redux";
import Model from "./Model";
import Loading from "./Loading";
import { selectLoadedModels } from "../../store/models/selectors";
import Camera from "./Camera";
import { selectCamera } from "../../store/scene/selectors";

function Scene() {
  const loadedModels = useSelector(selectLoadedModels);
  const camera = useSelector(selectCamera);

  console.log(camera);
  return (
    <Canvas
      onCreated={({ scene }) => {
        scene.background = new THREE.Color("#e6e6e6");
      }}
    >
      <ambientLight />
      <Suspense fallback={<Loading />}>
        <Camera position={[...camera.position]} fov={90} />
        {loadedModels.map((model, i) => {
          return (
            <Model
              key={Math.floor(Math.random() * 100000)}
              url={model.obj.url}
              mesh={model.obj.mesh}
              position={[i / 10, 0, 0]}
            />
          );
        })}
      </Suspense>
    </Canvas>
  );
}

export default Scene;
