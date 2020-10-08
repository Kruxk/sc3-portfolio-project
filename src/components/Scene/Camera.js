import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from "react-three-fiber";

export default function Camera(props) {
  const ref = useRef();
  const { setDefaultCamera, size, viewport } = useThree();

  useEffect(() => void setDefaultCamera(ref.current));

  useFrame(() => ref.current.updateMatrixWorld());

  return (
    <perspectiveCamera
      ref={ref}
      {...props}
      aspect={size.width / viewport.width}
    />
  );
}
