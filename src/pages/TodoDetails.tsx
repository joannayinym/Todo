import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: 60,
    },
    row: {
      display: "flex",
      alignItems: "center",
      "& *": {
        paddingRight: 20,
      },
    },
  })
);

export default function TodoDetails() {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams<any>();

  const todoList = useAppSelector((state) => state.todoList.values);
  const todoDetails = todoList.filter((todo) => todo.id === id);
  const flag = todoDetails && todoDetails.length > 0;

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.row}>
          <Typography variant="h6">Description:</Typography>
          <Typography>{flag && todoDetails[0].description}</Typography>
        </div>
        <div className={classes.row}>
          <Typography variant="h6">Category:</Typography>
          <Typography>{flag && todoDetails[0].category}</Typography>
        </div>
        <div className={classes.row}>
          <Typography variant="h6">Content:</Typography>
          <Typography>{flag && todoDetails[0].content}</Typography>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        Back
      </Button>
    </Container>
  );
}
