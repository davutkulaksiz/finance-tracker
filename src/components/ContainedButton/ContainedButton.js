import React from "react";
import Button from "@material-ui/core/Button";

const ContainedButton = ({ color, text }) => {
  return (
    <Button variant="contained" color={color}>
      {text}
    </Button>
  );
};

export default ContainedButton;
