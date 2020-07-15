import React from "react";
import LoadedModels from "../components/LoadedModels";
import { useSelector } from "react-redux";
import {
  selectAvailModels,
  selectLoadedModels,
} from "../store/models/selectors";
import Categorycard from "../components/Categorycard";

function Library() {
  const availableModels = useSelector(selectAvailModels);
  const loadedModels = useSelector(selectLoadedModels);

  return (
    <div style={{ padding: "2em", background: "#E6E6E6" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          overflowX: "auto",
        }}
      >
        {loadedModels.map((model, index) => (
          <LoadedModels
            key={Math.floor(Math.random() * 10000)}
            model={model}
            index={index}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {availableModels.map((model) => (
          <Categorycard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}

export default Library;
