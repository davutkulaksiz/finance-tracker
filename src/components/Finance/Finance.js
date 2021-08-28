import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import Form from "../Form/Form";
import FinanceList from "../FinanceList/FinanceList";
import ContainedButton from "../ContainedButton/ContainedButton";

const useStyles = makeStyles((theme) => ({
  income: {
    boxShadow: "0px 14px 9 -15px #81c784",
    borderRadius: "11px",
    backgroundColor: "#f5f5f5",
  },
  expense: {
    boxShadow: "0px 14px 9 -15px #e57373",
    borderRadius: "11px",
    backgroundColor: "#f5f5f5",
  },
  tracker: {
    boxShadow: "0px 14px 9 -15px #3f51b5",
    borderRadius: "11px",
    backgroundColor: "#f5f5f5",
  },
  incomeTitle: { color: "#81c784" },
  expenseTitle: { color: "#e57373" },
  trackerTitle: { color: "#3f51b5" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    marginRight: "1em",
  },
}));

const Finance = ({ type }) => {
  const classes = useStyles();

  // type checking for rendering correct component
  let isIncome = type === "income" ? true : false;
  let isExpense = type === "expense" ? true : false;
  let isTracker = type === "tracker" ? true : false;

  let showAdd = false;

  const onAdd = (type, name, currency, amount) => { console.log(name)};

  return (
    <>
      {isIncome && (
        <Card className={classes.income}>
          <CardHeader
            className={classes.incomeTitle}
            title="Income"
          ></CardHeader>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.grid}>
                <FinanceList financeType={type} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      {isExpense && (
        <Card className={classes.expense}>
          <CardHeader
            className={classes.expenseTitle}
            title="Expense"
          ></CardHeader>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.grid}>
                <FinanceList financeType={type} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      {isTracker && (
        <Card className={classes.tracker}>
          <header className={classes.header}>
            <CardHeader
              className={classes.trackerTitle}
              title="Tracker"
            ></CardHeader>
            <ContainedButton color="primary" text="Add"></ContainedButton>
          </header>
          <CardContent>
            <Form onAdd={onAdd}/>
          </CardContent>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.grid}>
                <FinanceList financeType={type} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Finance;
