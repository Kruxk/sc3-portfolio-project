import React from "react";
import { useDispatch } from "react-redux";
import { removeModel } from "../store/models/actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
} from "@material-ui/core";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";

const useStyles = makeStyles({
  root: {
    border: "1px solid #E6E6E6",
    margin: "0.5em",
    minWidth: 82.4,
    maxWidth: 82.4,
  },
  media: {
    // margin: "auto",
    // width: 100,
    height: 100,
  },
  actions: {
    justifyContent: "center",
  },
});

export default function LoadedModels({ model, index, ...props }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={model.thumbnail} title="" />
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton
          aria-label="delete"
          onClick={(e) => dispatch(removeModel(index))}
        >
          <DeleteForeverTwoToneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
