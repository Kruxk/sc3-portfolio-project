import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveEnv, selectPresets } from "../store/scene/selectors";
import { Slider, Select, MenuItem, makeStyles } from "@material-ui/core";
import { changeLight } from "../store/scene/actions";
import {
  EmojiObjectsTwoTone,
  AddTwoTone,
  RemoveTwoTone,
} from "@material-ui/icons";
import SaveButton from "./SaveButton";

const useStyles = makeStyles({
  slider: {
    color: "#4fb8a6",
  },
  select: {
    fontFamily: "Lato",
    color: "#4fb8a6",
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "&:hover": {
      borderBottom: "none",
    },
  },
});

export default function Menu({
  handleExport,
  handleIntensity,
  intensity,
  ...props
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeEnv = useSelector(selectActiveEnv);
  const options = useSelector(selectPresets);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          display: "flex",
          width: "10em",
          alignItems: "center",
          margin: "1em",
        }}
      >
        <RemoveTwoTone />
        <Slider
          variant="filled"
          className={classes.slider}
          value={intensity}
          onChange={(e, newValue) => handleIntensity(newValue)}
          min={0.1}
          max={8}
        />
        <AddTwoTone />
      </div>
      <Select
        IconComponent={EmojiObjectsTwoTone}
        className={classes.select}
        value={activeEnv}
        onChange={(e) => dispatch(changeLight(e.target.value))}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option} className={classes.select}>
            Lighting {i + 1}
          </MenuItem>
        ))}
      </Select>
      <SaveButton handler={handleExport} />
    </div>
  );
}
