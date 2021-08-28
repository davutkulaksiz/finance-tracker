import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContainedButton from "../ContainedButton/ContainedButton";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    background: "white",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "600",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <a href="https://crwizard.com/" target="_blank">
            <img src={logo} height="26px" alt="logo"></img>
          </a>
          <Typography variant="h5" className={classes.title} color="primary">
            Finance Tracker
          </Typography>
          <a href="https://github.com/davutkulaksiz" target="_blank">
            <ContainedButton color="primary" text="GitHub" />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
