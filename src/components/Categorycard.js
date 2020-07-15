import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { loadModels } from "../store/models/actions";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    border: "1px solid #E6E6E6",
    margin: "0.5em",
    minWidth: 206,
    maxWidth: 206,
  },
  typography: {
    fontFamily: "Lato",
    fontSize: "1.15em",
  },
  media: {
    // margin: "auto",
    // width: 100,
    height: 250,
  },
  button: {
    background: "#E0E1E2",
    color: "black",
    fontSize: "0.9em",
    padding: "0.5em 1.2em",
    borderRadius: "2em",
    fontFamily: "Lato",
    "&:hover": {
      backgroundColor: "#CACBCD",
    },
  },
});

export default function Categorycard({ model, ...props }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={model.thumbnail} title="" />

        <CardContent>
          <Typography
            gutterBottom
            className={classes.typography}
            variant="h6"
            component="h2"
          >
            {model.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.button}
          onClick={(e) => dispatch(loadModels(model))}
        >
          Select Model
        </Button>
      </CardActions>
    </Card>
  );
}
