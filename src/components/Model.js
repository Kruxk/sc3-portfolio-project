import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const [model, setModel] = useState();
  console.log(model.scene.toJson());
  useEffect(() => {
    new GLTFLoader().load(
      "/TOOTHPASTE_Placeholder_TrueScale_v1.gltf",
      setModel
    );
  }, []);

  return model ? (
    <primitive
      object={model.scene.toJson()}
      position={[0, 0, 0]}
      scale={[25, 25, 25]}
    />
  ) : null;
}

export default Model;
