import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Model() {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/Background_Object_v1.gltf", setModel);
  }, []);

  return model ? <primitive object={model.scene} position={[0, 0, 0]} /> : null;
}

export default Model;
