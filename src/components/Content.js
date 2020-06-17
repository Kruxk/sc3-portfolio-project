import React, { useState } from "react";
import {
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";

const Content = (props) => {
  const [visible, setVisible] = useState(true);

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as="h3" style={{ display: "inline-block" }}>
            Application Content
          </Header>
          <div
            style={{
              display: "inline",
              position: "absolute",
              right: "1em",
              top: "0.5em",
            }}
          >
            <Button circular onClick={() => setVisible(!visible)}>
              Options
            </Button>
            <Button circular>Render</Button>
          </div>
          {props.scene}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Content;
