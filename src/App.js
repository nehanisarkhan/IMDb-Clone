import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import WatchList from "./components/watchlist/WatchList";
import Signin from "./components/SignIn";
import Default from "./components/Default";
import MovieDetails from "./components/MovieDetails";
import PrivateRoute from "./PrivateRouteContainer";
const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={Signin}></Route>
        <Route exact path="/" component={MovieList}></Route>
        <Route path="/details" component={MovieDetails}></Route>

        <PrivateRoute path="/watchlist" component={WatchList}></PrivateRoute>
        <Route component={Default}></Route>
      </Switch>
    </div>
  );
};

export default App;
