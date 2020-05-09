import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  sheet: {
    marginTop: theme.spacing(8),
  },
  media: {
    height: 200,
  },
  title: {
    margin: theme.spacing(3, 0),
  },
  link: {
    padding: "4px 5px",
    textDecoration: "none",
    marginLeft: "8px",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();
  const state = useSelector((state) => state);

  let joinedCourses = [];

  state.courses.forEach((course) => {
    course.users.forEach((ids) => {
      if (ids === state.user._id) {
        joinedCourses.push(course);
      }
    });
  });

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    axios.get("/get-all").then((res) => setUsers(res.data.data));
  }

  function handleDelete(courseId) {
    axios
      .post("/course-delete", { courseId })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("COURSEDELETEERR", err));
  }

  function handleUserConfirm(userId) {
    axios.get(`/confirm-user?userId=${userId}`).then((res) => {
      if (res.data.success) {
        alert("Confirmed");
      } else {
        alert("Something Wrong");
      }
    });
  }

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      {state.user.isAdmin || state.user.isConfirmedByAdmin ? (
        <div className={classes.sheet}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Courses You have Joined
          </Typography>
          <Grid container className={classes.grid}>
            {joinedCourses.map((course) => (
              <Grid item xs={12} lg={4} key={course._id}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={`/uploads/${course.courseimg}`}
                    title={course.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography component="h1" variant="h5" className={classes.title}>
            Courses
          </Typography>
          <Grid container spacing={5}>
            {state.courses.map((course) => (
              <Grid item xs={12} lg={4} key={course._id}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={`/uploads/${course.courseimg}`}
                    title={course.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                  {state.user.isAdmin && (
                    <CardActions>
                      <Link
                        to={`/edit-course/${course._id}`}
                        className={classes.link}
                      >
                        Edit
                      </Link>
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleDelete(course._id)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
          {state.user.isAdmin && (
            <>
              <Typography component="h1" variant="h5" className={classes.title}>
                Users
              </Typography>
              <Grid container direction="column">
                {users.map((user) => (
                  <Paper className={classes.paper} key={user._id}>
                    <Grid container justify="space-around" alignItems="center">
                      <Grid item>
                        <Typography component="h1" variant="body1">
                          {user.name}
                        </Typography>
                        <Typography component="h1" variant="body1">
                          {user.email}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          disabled={user.isConfirmedByAdmin}
                          onClick={() => handleUserConfirm(user._id)}
                        >
                          {user.isConfirmedByAdmin ? "Confirmed" : "Confirm"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Grid>
            </>
          )}
        </div>
      ) : (
        <div className={classes.sheet}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Not Confirmed By Admin
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
