import React, { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree } from "react-three-fiber";
import { useDrag, useGesture } from "react-use-gesture";
import { useSpring, a } from "react-spring/three";

function Model({ url, position, ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const { size, viewport, gl } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    position: [...position],
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 650 },
  }));
  const bind = useDrag(
    ({ offset: [x, y], vxvy: [vx, vy], down, altKey, ...props }) =>
      !altKey
        ? set({
            position: [x / aspect, 0, y / aspect],
          })
        : set({
            rotation: [y / aspect, x / aspect, 0],
          }),
    { eventOptions: { pointer: true } }
  );
  // const bind = useGesture(
  //   {
  //     onDrag: ({ offset: [x, y], vxvy: [vx, vy], down, altKey, ...props }) =>
  //       set({
  //         position: [x / aspect, 0, y / aspect],
  //       }),
  //     // onDrag: ({ offset: [x, y], vxvy: [vx, vy], down, altKey, ...props }) =>
  //     //   altKey &&
  //     //   set({
  //     //     rotation: [y / aspect, x / aspect, 0],
  //     //   }),
  //   },
  //   { eventOptions: { pointer: true } }
  // );

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
  console.log(newSpring);
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
