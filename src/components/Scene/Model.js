import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const [model, setModel] = useState();
  // console.log(model);
  // if (model) model.scene.visible = true;
  useEffect(() => {
    new GLTFLoader().load(
      "/models/TANDPASTA-PRODENT-ROUNDED-001_v1.glb",
      setModel
    );
  }, []);

  return model ? (
    <primitive object={model.scene} position={[0, 0, 0]} scale={[25, 25, 25]} />
  ) : null;
}

export default Model;
