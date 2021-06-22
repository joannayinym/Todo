import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../store/todoReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    row: {
      width: "100%",
      display: "flex",
    },
    label: {
      width: 150,
      paddingLeft: 40,
    },
    text: {
      width: "90%",
      height: 40,
      "& .MuiOutlinedInput-root": {
        height: 30,
        width: "90%",
      },
      "& .MuiTextField-root": {
        height: 30,
        width: "90%",
      },
      "& .MuiFormControl-root": {
        height: 30,
        width: "90%",
      },
    },
    mutiText: {
      width: "90%",
      height: 80,
      "& .MuiOutlinedInput-root": {
        height: 60,
        width: "90%",
      },
      "& .MuiTextField-root": {
        height: 60,
        width: "90%",
      },
      "& .MuiFormControl-root": {
        height: 60,
        width: "90%",
      },
    },
    button: {
      textTransform: "none",
      width: 20,
    },
  })
);

const validationSchema = yup.object({
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  content: yup.string().required("Content is required"),
});

export default function InputForm() {
  const classes = useStyles();

  const [category, setCategory] = useState("css");

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      description: "",
      category: category,
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      dispatch(
        addTodo({
          id: uuid(),
          description: values.description,
          category: category,
          content: values.content,
        })
      );
    },
  });

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCategory(event.target.value as string);
  };

  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <div className={classes.row}>
        <div className={classes.label}>
          <Typography>Description:</Typography>
        </div>
        <div className={classes.text}>
          <TextField
            id="description"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.label}>
          <Typography>Category:</Typography>
        </div>
        <div className={classes.text}>
          <FormControl variant="outlined">
            <Select
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value="css">css</MenuItem>
              <MenuItem value="html">html</MenuItem>
              <MenuItem value="javascript">javascript</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.label}>
          <Typography>Content:</Typography>
        </div>
        <div className={classes.mutiText}>
          <TextField
            id="content"
            variant="outlined"
            multiline
            rows={2}
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  );
}
