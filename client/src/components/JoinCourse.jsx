import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


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
   menuItemcolor:{
 color:"black"
   },
  additionalBtn: (prop) => ({
    margin: prop ? theme.spacing(1, 0, 1, 1) : theme.spacing(1, 0, 0, 1),
  }),
}));

function JoinCourse() {
  const [course, setCourse] = useState("");
  const [wayToLearn, setWayToLearn] = useState("");
  const [additional, setAdditional] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles(additional);
  const state = useSelector((state) => state);

  function handleSubmit(e) {
    e.preventDefault();

    const joinCourseData = {
      name: e.target.name.value,
      email: e.target.email.value,
      courseId: course,
      cnic: e.target.cnic.value,
      address: e.target.address.value,
      learnway: wayToLearn,
      fatherName: additional ? e.target.fname.value : "",
      oldAcademyName: additional ? e.target.oldAcademyName.value : "",
      oldAcadmyAddress: additional ? e.target.oldAcadmyAddress.value : "",
      oldAcademyEmail: additional ? e.target.oldAcademyEmail.value : "",
    };

    axios
      .post("/join-course", joinCourseData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          return setOpen(true);
        } else {
          return alert("something wrong plz try agian later");
        }
      })
      .catch((err) => console.log("JOINCOURSEERR", err));
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
        <Collapse in={open} style={{ width: "100%" }}>
          <Alert
            variant="filled"
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            You have joined the course
          </Alert>
        </Collapse>
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
                color="black"
                required
                fullWidth
                variant="outlined"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                {state.courses.map((option) => (
                  <MenuItem className={classes.menuItemcolor} key={option._id} value={option._id}>
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
                onChange={(e) => setWayToLearn(
                   e.target.value)}
              >
                <MenuItem   className={classes.menuItemcolor} value="One To One Session">
                  One To One Session
                </MenuItem>
                <MenuItem  className={classes.menuItemcolor}  color="black" value="Video Session">Video Session</MenuItem>
                <MenuItem  className={classes.menuItemcolor} value="Class Session">Class Session</MenuItem>
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
                    name="oldAcademyName"
                    variant="outlined"
                    fullWidth
                    id="oldAcademyName"
                    label="Old Academy Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="oldAcadmyAddress"
                    variant="outlined"
                    fullWidth
                    id="oldAcadmyAddress"
                    label="Old Acadmy Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="oldAcademyEmail"
                    variant="outlined"
                    fullWidth
                    id="oldAcademyEmail"
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
