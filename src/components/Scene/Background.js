import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { TextureLoader } from "three";

export default function Background() {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "./models/Background_Object_v1.gltf"
  );
  // const newMat = useLoader(TextureLoader, "./models/GridPlane_alphamatte.png");

  // console.log("NEW", newMat);
  // console.log(nodes, materials);
  return (
    <group position={[0, 0, 0]} visible={true}>
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials.DiffuseDarkGrey}
      />
    </group>
  );
}
