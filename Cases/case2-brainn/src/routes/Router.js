import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import MegaSenaPage from '../pages/MegaSenaPage/MegaSenaPage';
import DiaDeSortePage from '../pages/DiaDeSortePage/DiaDeSortePage';
import LotofacilPage from '../pages/LotofacilPage/LotofacilPage';
import LotomaniaPage from '../pages/LotomaniaPage/LotomaniaPage'
import QuinaPage from '../pages/QuinaPage/QuinaPage';
import TimemaniaPage from '../pages/TimemaniaPage/TimemaniaPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/mega-sena">
                    <MegaSenaPage/>
                </Route>
                <Route exact path="dia-de-sorte">
                    <DiaDeSortePage/>
                </Route>
                <Route exact path="/lotofacil">
                    <LotofacilPage/>
                </Route>
                <Route exact path="/lotomania">
                    <LotomaniaPage/>
                </Route>
                <Route exact path="/quina">
                    <QuinaPage/>
                </Route>
                <Route exact path="/timemania">
                    <TimemaniaPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;