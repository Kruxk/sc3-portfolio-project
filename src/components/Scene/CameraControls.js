import React, { useRef } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useFrame((state) => {
    controls.current.update();
    // console.log(controls.current.mouseButtons);
  });

  return (
    <orbitControls
      ref={controls}
      maxPolarAngle={Math.PI / 2.8}
      enablePan={false}
      maxAzimuthAngle={0}
      minAzimuthAngle={0}
      mouseButtons={{ LEFT: false, MIDDLE: 1, RIGHT: 0 }}
      args={[camera, domElement]}
    />
  );
}

export default CameraControls;
