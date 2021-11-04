import React, { Component } from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import ListingPage from "./Pages/ListingPage/ListingPage";
import DescriptionPage from "./Pages/DescriptionPage/DescriptionPage";
import CartPage from "./Pages/CartPage/CartPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import "./App.css";

// Bez atmaskām!!!

export class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route exact path="/404" component={ErrorPage} />
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route
              exact
              path="/:category"
              render={({
                match: {
                  params: { category },
                },
              }) => <ListingPage category={category} />}
            ></Route>
            <Route
              exact
              path="/:category/:id"
              render={({
                match: {
                  params: { id },
                },
              }) => <DescriptionPage id={id} />}
            ></Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
