import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Post from "../pages/Post";
import ErrorPage from "../pages/ErrorPage";
import NewPost from "../pages/NewPost";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/posts/new" component={NewPost} />
      <Route exact path="/posts/:slug" component={Post} />
      <Route exact path="/posts">
        <Redirect to="/" />
      </Route>
      <Route exact component={Home} path="/" />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}
