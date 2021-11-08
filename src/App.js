import React, { Component } from "react";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Navbar from "./Components/Navbar/Navbar";
import ListingPage from "./Components/ListingPage/ListingPage";
import DescriptionPage from "./Components/DescriptionPage/DescriptionPage";
import CartPage from "./Components/CartPage/CartPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

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
