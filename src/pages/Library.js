import React from "react";
import Content from "../components/Content";
import CategoryCards from "../components/CategoryCards";
import LoadedModels from "../components/LoadedModels";

function Library() {
  return (
    <div>
      <LoadedModels />
      <Content content={<CategoryCards />} but1={"Home"} />
    </div>
  );
}

export default Library;
