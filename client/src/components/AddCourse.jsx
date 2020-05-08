import React, { useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Add from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    textDecorationStyle: "none",
  },
}));

function AddCourse() {
  const [file, setfile] = useState(null);
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("title", e.target.title.value);
    data.append("description", e.target.description.value);
    data.append("courseimg", file);

    axios
      .post("/add-course", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("ADDCOURSERR", err));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Add />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Course
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <textarea
                placeholder="Description"
                name="description"
                rows="4"
                style={{ width: "100%" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                name="courseimg"
                required
                onChange={(e) => setfile(e.target.files[0])}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Course
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddCourse;
