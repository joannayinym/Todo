import React from "react";
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { removeTodos } from "../../store/todoReducer";
import { useAppDispatch } from "../../hooks";

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
    button: {
      textTransform: "none",
    },
  })
);

interface EnhancedTableToolbarProps {
  numSelected: number;
  selected: string[];
}

export default function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const classes = useToolbarStyles();
  const { numSelected, selected } = props;
  const dispatch = useAppDispatch();

  const deleteSelectedHandler = () => {
    dispatch(removeTodos(selected));
  };

  return (
    <Toolbar className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        disabled={numSelected <= 0}
        onClick={deleteSelectedHandler}
        className={classes.button}
      >
        Delete selected
      </Button>
    </Toolbar>
  );
}
