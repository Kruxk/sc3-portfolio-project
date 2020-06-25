import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoadedModels } from "../store/models/selectors";
import { Image, Button } from "semantic-ui-react";
import { removeModel } from "../store/models/actions";

export default function LoadedModels() {
  const LoadedModels = useSelector(selectLoadedModels);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        padding: "1em",
        marginTop: "1.5em",
        marginBottom: "0",
      }}
    >
      {LoadedModels.map((model, index) => {
        return (
          <div
            style={{
              margin: "0.5em",
              border: "1px solid #E0E1E2",
              paddingBottom: "0.25em",
              //   textAlign: "center",
              alignContent: "center",
            }}
          >
            <Image
              style={{ width: "100px", paddingBottom: "0.25em" }}
              src={model.thumbnail}
            />
            <Button onClick={(e) => dispatch(removeModel(index))} circular>
              Remove
            </Button>
          </div>
        );
      })}
    </div>
  );
}
