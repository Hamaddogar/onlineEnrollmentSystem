import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  media: {
    height: 200,
  },
  title: {
    margin: theme.spacing(3, 0),
  },
}));

const Dashboard = () => {
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

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Dashboard;
