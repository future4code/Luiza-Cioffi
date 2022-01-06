import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import PostPage from "../pages/PostPage/PostPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = ({setLoginButton}) => {
  return (
    <Switch>
        <Route exact path="/login">
          <LoginPage setLoginButton={setLoginButton} />
        </Route>

        <Route exact path="/cadastro">
          <RegisterPage setLoginButton={setLoginButton} />
        </Route>

        <Route exact path="/">
          <FeedPage />
        </Route>

        <Route exact path="/post/:id/">
          <PostPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
    </Switch>
  )
}

export default Router