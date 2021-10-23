import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Welcome";
import Category from "./Pages/Categories/Category";
import Description from "./Pages/Descriptions/Description";
import Cart from "./Pages/Cart";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      product: [],
      id: [],
    };

    this.setCategory = this.setCategory.bind(this);
    this.setProduct = this.setProduct.bind(this);
  }

  setCategory = (category) => {
    this.setState({
      category: category,
    });
  };

  setProduct = (product) => {
    this.setState({
      product: product.name,
      id: product.id,
    });
  };

  render() {
    const { category, product, id } = this.state;
    return (
      <Router>
        <Navigation setCategory={this.setCategory} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/${category.name}`}>
            <Category
              category={category}
              setCategory={this.setCategory}
              setProduct={this.setProduct}
            />
          </Route>
          <Route exact path={`/${category.name}/${product}`}>
            <Description id={id} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
