import React, { useState } from "react";
import { Icon, Menu, Segment, Sidebar, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { selectCamera } from "../store/scene/selectors";
import { setCamera } from "../store/scene/actions";

const Content = (props) => {
  const [visible, setVisible] = useState(false);
  const { position } = useSelector(selectCamera);
  const dispatch = useDispatch();

  console.log(position);
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
        <Menu.Item
          as="a"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Icon name={props.but1.toLowerCase()} />
            {props.but1}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              circular
              onClick={(e) =>
                dispatch(
                  setCamera([position[0], position[1], position[2] - 0.01])
                )
              }
            >
              <b>+</b>
            </Button>
            <br />
            <Button
              circular
              onClick={(e) =>
                dispatch(
                  setCamera([position[0], position[1], position[2] + 0.01])
                )
              }
            >
              <b>-</b>
            </Button>
          </div>
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
