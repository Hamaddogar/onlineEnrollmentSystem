import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Appbar from "./components/Appbar";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
