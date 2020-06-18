import React from "react";
import { Card, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { loadModels } from "../store/models/actions";

const Categorycard = (props) => {
  const dispatch = useDispatch();

  return (
    <Card style={{ margin: "0 1em" }}>
      <div
        style={{
          height: "22em",
          display: "flex",
          justifyContent: "center",
          background: "#e6e6e6",
        }}
      >
        <img style={{ height: "100%" }} src={props.img} alt="" />
      </div>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button circular onClick={(e) => dispatch(loadModels(props.url))}>
          Select Model
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Categorycard;
