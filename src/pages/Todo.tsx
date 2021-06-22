import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputForm from "./components/InputForm";
import TodoTable from "./components/TodoTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    left: {
      width: "35%",
    },
    right: {
      width: "65%",
    },
  })
);
export default function Todo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <InputForm />
      </div>
      <div className={classes.right}>
        <TodoTable />
      </div>
    </div>
  );
}
