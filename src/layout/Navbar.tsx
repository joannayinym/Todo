import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& *": {
        paddingRight: 20,
        paddingLeft: 20,
      },
    },
  })
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.root}>
          <Typography>
            <Link
              component={RouterLink}
              to="/todo"
              color="inherit"
              variant="h6"
            >
              todo
            </Link>
          </Typography>
          <Typography>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              variant="h6"
            >
              about
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
