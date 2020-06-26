import React from "react";
import { useThree } from "react-three-fiber";
import { Button } from "semantic-ui-react";
import { HTML } from "drei";

function dataURIToBlob(dataURI) {
  const binStr = window.atob(dataURI.split(",")[1]);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  return new window.Blob([arr]);
}

function saveDataURI(name, dataURI) {
  const blob = dataURIToBlob(dataURI);

  const link = document.createElement("a");
  link.download = name;
  link.href = window.URL.createObjectURL(blob);
  link.onclick = () => {
    window.setTimeout(() => {
      window.URL.revokeObjectURL(blob);
      link.removeAttribute("href");
    }, 500);
  };
  link.click();
}

export default function Render() {
  const { scene, camera, gl, size } = useThree();
  //   const aspect = size.width / viewport.width;

  const handleRender = (width, height) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    scene.children[2].visible = false;
    gl.setSize(width, height);
    console.log(scene);
    gl.render(scene, camera, null, false);
    const DataURI = gl.domElement.toDataURL("image/png");
    // console.log(DataURI);
    // console.log(scene, camera, gl, size, viewport);
    saveDataURI(`${Math.floor(Math.random() * 100000)}.png`, DataURI);
    scene.children[2].visible = true;
    gl.setSize(size.width, size.height);
  };

  return (
    <HTML style={{ position: "relative", left: "32em", bottom: "19em" }}>
      <Button onClick={(e) => handleRender(3840, 2160)} circular>
        Render
      </Button>
    </HTML>
  );
}
