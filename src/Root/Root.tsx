import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function Root() {
  return (
    <>
      <Switch>
        <Route component={Profile} path="/profile" />
        <Route component={Home} path="/" />
      </Switch>
    </>
  );
}
