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
  });

  return (
    <orbitControls
      ref={controls}
      maxPolarAngle={Math.PI / 2.8}
      maxDistance={19.589840195647547}
      minDistance={0.5740103294635633}
      enablePan={false}
      maxAzimuthAngle={0}
      minAzimuthAngle={0}
      mouseButtons={{ LEFT: false, MIDDLE: 1, RIGHT: 0 }}
      args={[camera, domElement]}
    />
  );
}

export default CameraControls;
