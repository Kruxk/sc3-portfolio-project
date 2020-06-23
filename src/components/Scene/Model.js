import React, { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useLoader, useThree } from "react-three-fiber";
import { useDrag } from "react-use-gesture";
import { useSpring, a } from "react-spring/three";

function Model({ url, position, ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const { size, viewport, scene } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 800 },
  }));
  const bind = useDrag(
    ({ offset: [x, y], vxvy: [vx, vy], down, ...props }) =>
      set({
        position: [x / aspect, -y / aspect, 0],
        rotation: [y / aspect, x / aspect, 0],
      }),
    { eventOptions: { pointer: true } }
  );

  const model = useMemo(() => {
    if (nodes === undefined || materials === undefined) {
      return null;
    } else {
      const newModel = {
        nodes,
        materials,
        //position: newPosition,
        //bind,
      };

      return newModel;
    }
  }, [materials, nodes]);
  const newSpring = useMemo(() => {
    return spring;
  }, [spring]);
  const newBind = useMemo(() => {
    return bind;
  }, [bind]);

  // console.log({ bind });
  // console.log(scene);
  return model ? (
    <a.group
      //position={model.position}
      {...newBind()}
      {...newSpring}
      {...props}
    >
      {props.mesh.map((mesh) => (
        <mesh
          key={model.materials[mesh.material].uuid}
          material={model.materials[mesh.material]}
          geometry={model.nodes[mesh.geometry].geometry}
        />
      ))}
    </a.group>
  ) : null;
}

export default Model;
