import React from "react";
import Content from "../components/Content";
import CategoryCards from "../components/CategoryCards";

function Library() {
  return <Content content={<CategoryCards />} />;
}

export default Library;
