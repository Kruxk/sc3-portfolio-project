import React, { useEffect } from "react";
import Content from "../components/Content";
import Scene from "../components/Scene/Scene";
import { useDispatch } from "react-redux";
import { loadModels } from "../store/models/actions";

function Compose() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadModels("/models/TANDPASTA-PRODENT-ROUNDED-001_v1.glb"));
  }, []);

  return <Content content={<Scene />} />;
}

export default Compose;
