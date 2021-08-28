import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "1em",
    marginLeft: "1em",
  },
}));

const OutlinedButton = ({ color, text }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="outlined" color={color} fullWidth type="submit">
      {text}
    </Button>
  );
};

export default OutlinedButton;
