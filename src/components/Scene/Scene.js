import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import "./style.css";
import { useSelector } from "react-redux";
import Model from "./Model";
import { selectLoadedModels } from "../../store/models/selectors";
import Camera from "./Camera";
import CameraControls from "./CameraControls";
import Background from "./Background";
import { Environment } from "./Environment";
import { selectActiveEnv } from "../../store/scene/selectors";
import { HTML } from "drei";
import Render from "./Render";

function Scene() {
  const loadedModels = useSelector(selectLoadedModels);
  const activeEnv = useSelector(selectActiveEnv);

  return (
    <div>
      {/* <Render /> */}
      <Canvas
        alpha="true"
        onCreated={({ scene, gl }) => {
          gl: THREE.WebGLRenderer({ preserveDrawingBuffer: true, alpha: true });
          scene.background = new THREE.Color("#e6e6e6");
          gl.toneMapping = THREE.ReinhardToneMapping;
          // gl.toneMappingExposure = 0.5;
          gl.outputEncoding = THREE.sRGBEncoding;
          scene.background.convertSRGBToLinear();
          gl.domElement.getContext("experimental-webgl", {
            preserveDrawingBuffer: true,
          });
        }}
      >
        {/* <ambientLight intensity={1.14} /> */}
        {/* <pointLight position={[0, 5, 0]} /> */}
        <Render />
        <CameraControls />
        <Camera
          position={[0, 0.04928419090198964, 0.852950845625365]}
          fov={50}
        />
        <Suspense
          fallback={
            <HTML>
              <div>Loading...</div>
            </HTML>
          }
        >
          <Environment url={activeEnv} intensity={3} />
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
    </div>
  );
}

export default Scene;
