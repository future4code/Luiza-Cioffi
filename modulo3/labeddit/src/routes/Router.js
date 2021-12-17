import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import PostPage from "../pages/PostPage/PostPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/cadastro">
          <RegisterPage/>
        </Route>

        <Route exact path="/">
          <FeedPage />
        </Route>

        <Route exact path="/post/:id">
          <PostPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router