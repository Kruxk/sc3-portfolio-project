import { useThree } from "react-three-fiber";

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

export default function Render(props) {
  const { scene, camera, gl, size } = useThree();

  const handleRender = (width, height) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    scene.children[1].visible = false;
    gl.setSize(width, height);

    gl.render(scene, camera, null, false);
    const DataURI = gl.domElement.toDataURL("image/png");

    saveDataURI(`${Math.floor(Math.random() * 100000)}.png`, DataURI);
    scene.children[1].visible = true;
    gl.setSize(size.width, size.height);
  };

  if (props.trigger) {
    handleRender(4096, 2048);
    props.control(false);
  }

  return null;
}
