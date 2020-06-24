import React from "react";
import { useLoader } from "react-three-fiber";
import { HDRCubeTextureLoader } from "three/examples/jsm/loaders/HDRCubeTextureLoader";

export default function Environment({ background = false }) {
  const { gl, scene } = useThree();
  const [cubeMap] = useLoader();
  return <div></div>;
}
