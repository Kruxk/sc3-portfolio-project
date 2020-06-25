import React, { useRef, useEffect } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useEffect(() => {
    controls.current.polarAngle = 1.2718605108927004;
    console.log(controls.current.keys);
  });
  useFrame((state) => {
    controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      maxPolarAngle={Math.PI / 2}
      maxDistance={0.852950845625365}
      minDistance={0.3754064142089866}
      //polarAngle={1.2718605108927004}
      enablePan={true}
      // screenSpacePanning={true}
      maxAzimuthAngle={0}
      minAzimuthAngle={0}
      mouseButtons={{ LEFT: false, MIDDLE: false, RIGHT: 0 }}
      args={[camera, domElement]}
    />
  );
}

export default CameraControls;
