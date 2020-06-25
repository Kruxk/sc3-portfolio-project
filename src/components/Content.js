import React, { useState } from "react";
import { Icon, Menu, Segment, Sidebar, Button, Radio } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { changeLight } from "../store/scene/actions";

const Content = (props) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

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
          <Icon name="lightning" />
          Lighting
          {props.lightning &&
            props.lightning.map((preset, i) => {
              return (
                <Button
                  style={{
                    margin: "0.25em",
                    background: "#2C2C2C",
                    color: "white",
                  }}
                  circular
                  onClick={(e) => dispatch(changeLight(preset))}
                >
                  Preset {i + 1}
                </Button>
              );
            })}
        </Menu.Item>

        {/* <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item> */}
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "1em",
            }}
          >
            <Button circular onClick={() => setVisible(!visible)}>
              Options
            </Button>
            <Button circular>Render</Button>
          </div>
          {props.content}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Content;
