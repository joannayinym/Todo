import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Todo from "../pages/Todo";
import TodoDetails from "../pages/TodoDetails";
import About from "../pages/About";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/todo/:id" component={TodoDetails} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
