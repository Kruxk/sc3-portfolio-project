import React, { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";

function Model({ url, position, ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  const model = useMemo(() => {
    if (nodes === undefined || materials === undefined) {
      return null;
    } else {
      const newPosition = new THREE.Vector3(...position);
      const newModel = { nodes, materials, position: newPosition };

      return newModel;
    }
  }, [position, materials, nodes]);

  return model ? (
    <group position={model.position} {...props}>
      {props.mesh.map((mesh) => (
        <mesh
          key={model.materials[mesh.material].uuid}
          material={model.materials[mesh.material]}
          geometry={model.nodes[mesh.geometry].geometry}
        />
      ))}
    </group>
  ) : null;
}

export default Model;
