import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;