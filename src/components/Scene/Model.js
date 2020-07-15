import React, { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree } from "react-three-fiber";
import { useDrag } from "react-use-gesture";
import { useSpring, a } from "react-spring/three";

function Model({ url, position, ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [spring, set] = useSpring(() => ({
    position: [...position],
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 650 },
  }));
  const bind = useDrag(
    ({ offset: [x, y], vxvy: [vx, vy], down, altKey, ...props }) =>
      set({
        position: [x / aspect, 0, y / aspect],
      }),
    { eventOptions: { pointer: true } }
  );
  // const bindHover = useHover(
  //   ({ hovering }) =>
  //     set({
  //       rotation: hovering && [
  //         spring.rotation[1] / aspect,
  //         spring.rotation[0] / aspect,
  //         0,
  //       ],
  //     }),
  //   { eventOptions: { pointer: true } }
  // );
  // const bind = useGesture(
  //   {
  //     useDrag: ({ offset: [x, y], vxvy: [vx, vy], down, altKey, ...props }) =>
  //       set({ position: [x / aspect, 0, y / aspect] }),
  //     //onHover: ({ hovering }) => {
  //     //if (hovering) {
  //     //const y = spring.rotation[1];
  //     // set({ rotation: [y + 0.01, y + 0.01, 0] });
  //     //}
  //     //},
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
  // const newHover = useMemo(() => {
  //   return bindHover;
  // }, [bindHover]);

  const keys = Object.keys(model.nodes);

  // console.log("SCENE", scene);
  // console.log("GL", gl);
  return model ? (
    <a.group {...newBind()} {...newSpring} {...props}>
      {keys.map((key) => {
        if (model.nodes[key].type === "Mesh") {
          return (
            <mesh
              key={model.nodes[key].uuid}
              geometry={model.nodes[key].geometry}
              material={model.nodes[key].material}
            />
          );
        }
        return null;
      })}
    </a.group>
  ) : null;
}

export default Model;

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

/* {props.mesh.map((mesh) => (
        <mesh
          key={model.materials[mesh.material].uuid}
          material={model.materials[mesh.material]}
          geometry={model.nodes[mesh.geometry].geometry}
        /> */

// ))}
