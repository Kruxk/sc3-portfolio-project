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
import CameraControls from "./CameraControls";
import Background from "./Background";

function Scene() {
  const loadedModels = useSelector(selectLoadedModels);
  // const camera = useSelector(selectCamera);

  // console.log(camera);
  return (
    <Canvas
      onCreated={({ scene, gl }) => {
        scene.background = new THREE.Color("#e6e6e6");
        gl: new THREE.WebGLRenderer({ alpha: true });
      }}
    >
      <ambientLight intensity={1.14} />
      {/* <pointLight position={[0, 5, 0]} /> */}

      <CameraControls />
      <Camera position={[0, 0.04928419090198964, 0.852950845625365]} fov={50} />
      <Suspense fallback={<Loading />}>
        <Background />
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
