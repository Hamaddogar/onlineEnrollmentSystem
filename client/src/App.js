import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Appbar from "./components/Appbar";
import AddCource from "./components/AddCourse";
import JoinCource from "./components/JoinCourse";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/add-course" component={AddCource} />
        <PrivateRoute path="/join-course" component={JoinCource} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
