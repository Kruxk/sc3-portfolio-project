import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Background() {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "./models/Background_Object_v1.gltf"
  );
  console.log(nodes, materials);
  return (
    <group position={[0, 0, 0]}>
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials.DiffuseDarkGrey}
      />
    </group>
  );
}
