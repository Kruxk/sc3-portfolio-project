import React from "react";
import { Card, Button } from "semantic-ui-react";

const CardExampleCard = (props) => (
  <Card style={{ margin: "0 1em" }}>
    <div
      style={{
        height: "22em",
        display: "flex",
        justifyContent: "center",
        background: "#e6e6e6",
      }}
    >
      <img style={{ height: "100%" }} src={props.img} />
    </div>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <Button circular>Select Model</Button>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
