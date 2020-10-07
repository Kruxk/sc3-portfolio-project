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

  const model = useMemo(() => {
    if (nodes === undefined || materials === undefined) {
      return null;
    } else {
      const newModel = {
        nodes,
        materials,
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

  const keys = Object.keys(model.nodes);

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
