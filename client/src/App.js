import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Appbar from "./components/Appbar";
import AddCource from "./components/AddCourse";
import JoinCource from "./components/JoinCourse";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import EditCourse from "./components/EditCourse";
 import Allscreen  from '../src/components/Home/allhome';

function App() {
  return (
    <BrowserRouter>
    <Appbar/>
      <Switch>

         
      <Route  exact path="/Home" component={Allscreen} />
      <Route  exact path="/" component={Allscreen} />


        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add-course" component={AddCource} />
        <PrivateRoute path="/join-course" component={JoinCource} />
        <PrivateRoute path="/edit-course/:courseId" component={EditCourse} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
