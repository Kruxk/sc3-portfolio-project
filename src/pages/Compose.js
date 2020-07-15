import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { selectPresets, selectActiveEnv } from "../store/scene/selectors";
import { HTML } from "drei";
import { Canvas } from "react-three-fiber";
import { Environment } from "../components/Scene/Environment";
import { selectLoadedModels } from "../store/models/selectors";
import * as THREE from "three";
import LoadedModels from "../components/LoadedModels";
import SaveButton from "../components/SaveButton";
import CameraControls from "../components/Scene/CameraControls";
import Camera from "../components/Scene/Camera";
import Render from "../components/Scene/Render";
import Background from "../components/Scene/Background";
import Model from "../components/Scene/Model";
import "./compose.css";

function Compose() {
  const options = useSelector(selectPresets);
  const loadedModels = useSelector(selectLoadedModels);
  const activeEnv = useSelector(selectActiveEnv);
  const [exportScene, setExportScene] = useState(false);

  return (
    <div style={{ margin: "2em" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          overflowX: "auto",
        }}
      >
        {loadedModels.map((model, index) => (
          <LoadedModels
            key={Math.floor(Math.random() * 10000)}
            model={model}
            index={index}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <SaveButton handler={setExportScene} />
      </div>
      <Canvas
        onCreated={({ gl }) => {
          THREE.WebGLRenderer({ preserveDrawingBuffer: true, alpha: true });
          gl.toneMapping = THREE.ReinhardToneMapping;
          gl.setClearColor("#e6e6e6", 0);
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.domElement.getContext("experimental-webgl", {
            preserveDrawingBuffer: true,
          });
        }}
      >
        {/* <ambientLight intensity={1.14} /> */}
        {/* <pointLight position={[0, 5, 0]} /> */}

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
          {<Render control={setExportScene} trigger={exportScene} />}
          <Environment url={activeEnv} intensity={3} />
          <Background />
          {loadedModels.map((model, i) => {
            return (
              <Model
                key={Math.floor(Math.random() * 100000)}
                url={model.url}
                position={[i / 10, 0, 0]}
              />
            );
          })}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Compose;
