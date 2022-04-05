import React from 'react';
import { Switch, Route } from "react-router-dom"
import ErrorPage from '../pages/Error/ErrorPage';
import HomePage from '../pages/Home/HomePage';
import DetailPage from '../pages/Detail/DetailPage';


const Router = () => {
  return (
    <Switch>
        <Route exact path='/'>
            <HomePage/>
        </Route>
        <Route exact path='detail/:id'>
            <DetailPage/>
        </Route>
        <Route>
            <ErrorPage/>
        </Route>        
    </Switch>
  );
}

export default Router;