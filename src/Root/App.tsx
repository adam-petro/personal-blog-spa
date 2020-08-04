import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <>
      <Switch>
        <Route component={Profile} path="/profile" />
        <Route exact path="/posts/:slug" component={Post} />
        <Route exact path="/posts">
          <Redirect to="/" />
        </Route>
        <Route exact component={Home} path="/" />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </>
  );
}
