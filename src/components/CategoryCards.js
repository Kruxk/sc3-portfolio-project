import React from "react";
import Categorycard from "./Categorycard";
import { useSelector } from "react-redux";
import { selectAvailModels } from "../store/models/selectors";

function CategoryCards() {
  const availableModels = useSelector(selectAvailModels);
  // console.log(availableModels);
  return (
    <div style={{ display: "flex" }}>
      {availableModels.map((model) => (
        <Categorycard key={model.id} model={{ ...model }} />
      ))}
    </div>
  );
}

export default CategoryCards;
