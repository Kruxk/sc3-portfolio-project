import React from "react";
import Content from "../components/Content";
import Scene from "../components/Scene/Scene";

function Compose() {
  return (
    <div>
      <Content content={<Scene />} but1={"Zoom"} />
    </div>
  );
}

export default Compose;
