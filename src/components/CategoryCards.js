import React from "react";
import Categorycard from "./Categorycard";
import { useSelector } from "react-redux";
import { selectAvailModels } from "../store/models/selectors";

function CategoryCards() {
  const availableModels = useSelector(selectAvailModels);
  console.log(availableModels);
  return (
    <div style={{ display: "flex" }}>
      {availableModels.map((model) => (
        <Categorycard
          url={model.modelUrl}
          key={model.id}
          img={model.thumbnail}
          name={model.name}
        />
      ))}
    </div>
  );
}

export default CategoryCards;
