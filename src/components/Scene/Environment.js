import { useMemo } from "react";
import { useThree } from "react-three-fiber";
import { PMREMGenerator, UnsignedByteType } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export const Environment = ({ url, intensity }) => {
  const { gl, scene } = useThree();
  const pmremGenerator = new PMREMGenerator(gl);
  const loader = new RGBELoader();
  loader.setDataType(UnsignedByteType);
  pmremGenerator.compileEquirectangularShader();

  useMemo(() => {
    loader.load(url, (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;

      scene.environment = envMap;

      gl.toneMappingExposure = intensity;
      texture.dispose();
      pmremGenerator.dispose();
    });
    return null;
  }, [scene, loader, pmremGenerator, gl, url, intensity]);

  return null;
};
