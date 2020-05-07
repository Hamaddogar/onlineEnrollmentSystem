import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    color: "white",
    textDecorationStyle: "none",
    padding: "0 1em",
    margin: "0 0.2em",
  },
}));

function Appbar() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Online Enrollment System
          </Typography>
          {user.isAuthenticated ? (
            <>
              <Link to="/signin" className={classes.links}>
                Add Course
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin" className={classes.links}>
                Sign In
              </Link>
              <Link to="/signup" className={classes.links}>
                Sign Up
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
