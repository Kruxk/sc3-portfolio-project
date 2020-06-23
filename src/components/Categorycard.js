import React from "react";
import { Card, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { loadModels } from "../store/models/actions";

const Categorycard = ({ model, ...props }) => {
  const dispatch = useDispatch();
  console.log(model.thumbnail);
  return (
    <Card style={{ margin: "0 1em", width: "15.5em", height: "25em" }}>
      <div
        style={{
          height: "65%",
          display: "flex",
          justifyContent: "center",
          background: "#e6e6e6",
        }}
      >
        <img style={{ height: "100%" }} src={model.thumbnail} alt="" />
      </div>
      <Card.Content>
        <Card.Header>{model.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button circular onClick={(e) => dispatch(loadModels(model))}>
          Select Model
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Categorycard;
