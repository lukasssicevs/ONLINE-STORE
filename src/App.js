import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Welcome";
import Category from "./Pages/Categories/Category";
import Description from "./Pages/Descriptions/Description";
import Cart from "./Pages/Cart";
import DATA from "./dataQ";
import { Query } from "@apollo/client/react/components";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: "",
      product: [],
      id: [],
      selectedItems: [],
    };

    this.setCategory = this.setCategory.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.setSelectedItems = this.setSelectedItems.bind(this);
  }

  setCategory = (name) => {
    this.setState({
      categoryName: name,
    });
  };

  setProduct = (product) => {
    this.setState({
      product: product.name,
      id: product.id,
    });
  };

  setSelectedItems = (item) => {
    this.setState((prevState) => {
      return {
        selectedItems: [...prevState.selectedItems, item],
      };
    });
  };

  render() {
    const { categoryName, product, id, selectedItems } = this.state;

    return (
      <Router>
        <Query query={DATA}>
          {({ loading, data, error }) => {
            if (loading) return false;
            if (data) {
              console.log(data);
              return <div></div>;
            }
            if (error) return "error...";
          }}
        </Query>
        <Navigation setCategory={this.setCategory} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/${categoryName}`}>
            <Category
              categoryName={categoryName}
              setCategory={this.setCategory}
              setProduct={this.setProduct}
            />
          </Route>
          <Route exact path={`/${categoryName}/${product}`}>
            <Description id={id} setSelectedItems={this.setSelectedItems} />
          </Route>
          <Route path="/cart">
            <Cart selectedItems={selectedItems} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
