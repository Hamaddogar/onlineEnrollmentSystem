import React, { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Add from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";

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
  additionalBtn: (prop) => ({
    margin: prop ? theme.spacing(1, 0, 1, 1) : theme.spacing(1, 0, 0, 1),
  }),
}));

function JoinCourse() {
  const [course, setCourse] = useState("");
  const [wayToLearn, setWayToLearn] = useState("");
  const [additional, setAdditional] = useState(false);

  const classes = useStyles(additional);
  const state = useSelector((state) => state);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Add />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join Course
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                defaultValue={state.user.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                defaultValue={state.user.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="course"
                select
                label="Select Course"
                required
                fullWidth
                variant="outlined"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                {state.courses.map((option) => (
                  <MenuItem key={option._id} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="cnic"
                variant="outlined"
                required
                fullWidth
                id="cnic"
                label="CNIC"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="waytolearn"
                select
                label="Way to Learn"
                required
                fullWidth
                variant="outlined"
                value={wayToLearn}
                onChange={(e) => setWayToLearn(e.target.value)}
              >
                <MenuItem value="One To One Session">
                  One To One Session
                </MenuItem>
                <MenuItem value="Video Session">Video Session</MenuItem>
                <MenuItem value="Class Session">Class Session</MenuItem>
              </TextField>
            </Grid>
            <Button
              variant="outlined"
              className={classes.additionalBtn}
              onClick={() => setAdditional(!additional)}
            >
              Additional Information
            </Button>
            {additional && (
              <>
                <Grid item xs={12}>
                  <TextField
                    name="fname"
                    variant="outlined"
                    fullWidth
                    id="fname"
                    label="Father Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="academyName"
                    variant="outlined"
                    fullWidth
                    id="academyName"
                    label="Old Academy Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="acadmyAddress"
                    variant="outlined"
                    fullWidth
                    id="acadmyAddress"
                    label="Old Acadmy Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="academyEmail"
                    variant="outlined"
                    fullWidth
                    id="academyEmail"
                    label="Old Academy Email"
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Join Course
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default JoinCourse;
