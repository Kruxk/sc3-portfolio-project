import React from "react";
import Content from "../components/Content";
import Scene from "../components/Scene/Scene";
import LoadedModels from "../components/LoadedModels";

function Compose() {
  return (
    <div>
      <LoadedModels />
      <Content content={<Scene />} but1={"Zoom"} />
    </div>
  );
}

export default Compose;
