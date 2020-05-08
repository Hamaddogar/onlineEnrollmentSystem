import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const state = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}

export default PrivateRoute;
