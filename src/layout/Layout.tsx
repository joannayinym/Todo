import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import Main from "./Main";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Main />
    </div>
  );
}
