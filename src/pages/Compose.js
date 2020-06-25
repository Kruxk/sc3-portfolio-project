import React from "react";
import Content from "../components/Content";
import Scene from "../components/Scene/Scene";
import LoadedModels from "../components/LoadedModels";
import { useSelector } from "react-redux";
import { selectPresets } from "../store/scene/selectors";

function Compose() {
  const options = useSelector(selectPresets);

  return (
    <div>
      <LoadedModels />
      <Content content={<Scene />} lightning={options} />
    </div>
  );
}

export default Compose;
