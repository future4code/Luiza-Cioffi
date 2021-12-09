import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage"
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage"
import CreatTripPage from "./pages/CreateTripPage/CreateTripPage"
import TripDetailPage from "./pages/TripDetailsPage/TripDetailsPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreatTripPage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
