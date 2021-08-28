import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import Finance from "../Finance/Finance";
import { makeStyles } from "@material-ui/core/styles";
import "./Main.css";

const useStyles = makeStyles((theme) => ({}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
        spacing={10}
      >
        <Grid item xs={12} sm={6}>
          <Finance type="income"></Finance>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Finance type="expense"></Finance>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Finance type="tracker"></Finance>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
