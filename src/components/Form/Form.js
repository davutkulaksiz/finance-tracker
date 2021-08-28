import React from "react";
import { useState } from "react";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = ({ onAdd }) => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(type, name, currency, amount);

    onAdd({ type, name, currency, amount });

    setType("");
    setName("");
    setCurrency("");
    setAmount(0);
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={4} className={classes.root.radioGroup}>
        <Grid item xs={6}>
          <FormControl fullWidth required>
            <InputLabel>Finance Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Income">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" required>
            <TextField
              required
              id="outlined-basic"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required>
            <InputLabel>Currency Type</InputLabel>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" required>
            <TextField
              required
              id="outlined-basic"
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormControl>
        </Grid>
        <OutlinedButton
          color="primary"
          text="Save"
          fullWidth
          type="submit"
        ></OutlinedButton>
      </Grid>
    </form>
  );
};

export default Form;
