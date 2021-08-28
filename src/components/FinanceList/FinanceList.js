import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";
import {
  DeleteForever,
  CreditCard,
  AttachMoney,
  Euro,
} from "@material-ui/icons";
import {
  IconButton,
  Slide,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[300],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[300],
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
}));

const FinanceList = ({ financeType }) => {
  const [finances, setFinances] = useState([]);

  const classes = useStyles();
  // type checking for rendering correct component
  let isIncome = financeType === "income" ? true : false;
  let isExpense = financeType === "expense" ? true : false;
  let isTracker = financeType === "tracker" ? true : false;

  let financesArray = [
    { type: "income", name: "Salary", currency: "EUR", amount: 50 },
    { type: "expense", name: "Kids", currency: "EUR", amount: 50 },
    { type: "expense", name: "Food", currency: "USD", amount: 20 },
    { type: "income", name: "YouTube", currency: "USD", amount: 150 },
    { type: "income", name: "Twitch", currency: "USD", amount: 200 },
    { type: "expense", name: "Rent", currency: "EUR", amount: 1300 },
  ];

  useEffect(() => {
    setFinances(financesArray);
  }, []);

  const deleteFinance = (name) => {

    setFinances(finances.filter((finance) => finance.name !== name));
  };

  // filtering the arrays depending on the finance type
  let incomeFinances = finances.reduce((filtered, finance) => {
    if (finance.type === "income") {
      let newValue = {
        id: finance.id,
        type: finance.type,
        name: finance.name,
        currency: finance.currency,
        amount: finance.amount,
      };
      filtered.push(newValue);
    }
    return filtered;
  }, []);

  let expenseFinances = finances.reduce((filtered, finance) => {
    if (finance.type === "expense") {
      let newValue = {
        type: finance.type,
        name: finance.name,
        currency: finance.currency,
        amount: finance.amount,
      };
      filtered.push(newValue);
    }
    return filtered;
  }, []);

  return (
    <List dense="false" className={classes.list}>
      {isTracker &&
        finances.map((finance) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={finance.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    finance.type === "income"
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  {finance.currency === "EUR" && <Euro />}
                  {finance.currency === "USD" && <AttachMoney />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={finance.name}
                secondary={
                  finance.currency === "USD"
                    ? `$${finance.amount}`
                    : `€${finance.amount}`
                }
              ></ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  edge="false"
                  aria-label="delete"
                  onClick={() => deleteFinance(finance.name)}
                >
                  <DeleteForever />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      {isIncome &&
        incomeFinances.map((finance) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={finance.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarIncome}>
                  {finance.currency === "EUR" && <Euro />}
                  {finance.currency === "USD" && <AttachMoney />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={finance.name}
                secondary={
                  finance.currency === "USD"
                    ? `$${finance.amount}`
                    : `€${finance.amount}`
                }
              ></ListItemText>
            </ListItem>
          </Slide>
        ))}
      {isExpense &&
        expenseFinances.map((finance) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={finance.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarExpense}>
                  {finance.currency === "EUR" && <Euro />}
                  {finance.currency === "USD" && <AttachMoney />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={finance.name}
                secondary={
                  finance.currency === "USD"
                    ? `$${finance.amount}`
                    : `€${finance.amount}`
                }
              ></ListItemText>
            </ListItem>
          </Slide>
        ))}
    </List>
  );
};

export default FinanceList;
