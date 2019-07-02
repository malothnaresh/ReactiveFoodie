import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import SignIn from "./../Authentication/SignIn";
import SignUp from "./../Authentication/SignUp";
import TermsAndConditions from "../Authentication/TermsAndConditions";
import Collections from "../Containers/Collections";

import { isLogin } from "./ProtectorHOC";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Redirect to="/collections" /> : <Component {...props} />
      }
    />
  );
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/signin" component={SignIn} />
        <PublicRoute path="/signup" component={SignUp} />
        <PublicRoute
          path="/terms-and-conditions"
          component={TermsAndConditions}
        />
        <PrivateRoute path="/collections" component={Collections} />
        <Redirect to="/signin" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
