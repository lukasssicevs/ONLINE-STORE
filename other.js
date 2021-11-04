import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

<Router>
  <Navbar />
  <Switch>
    <Route exact path="/products">
      <Products />
    </Route>
    <Route path="/description">
      <Description />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
  </Switch>
</Router>;

console.log(data);
const { currencies, categories } = data;
return (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: "200px",
    }}
  >
    <div>
      {currencies.map((currency) => (
        <p key={currency}>{currency}</p>
      ))}
    </div>
    <div style={{ fontSize: "50px", textAlign: "center" }}>
      {categories.map((category) => (
        <p key={category.name}>{category.name}</p>
      ))}
    </div>
  </div>
);

import { gql } from "@apollo/client";

const QUERY = gql`
  query {
    categories {
      name
      products{
        id
        name
        inStock
        gallery
        category
        brand
        prices{
          currency
          amount
        }
      }
    }
    product(id: "ps-5") {
      id
      name
      gallery
      description
      attributes {
        name
        type
        id
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency
      }
    }
    currencies
    category {
      name
      products {
        id
        category
      }
    }
  }
`;

export default QUERY;



return (
  <Query query={}>
    {({ loading, data, error }) => {
      if (loading) return false;
      if (data) {
        const {  } = data;
        return (
          <div></div>
        );
      }
      if (error) return "error...";
    }}
  </Query>
);


<div className="cart-product">
            <div className="cart-product-details"></div>
            <div className="cart-images-container">
              <div className="left-button">o</div>
              <img className="cart-product-image" src={image} />
              <div className="right-button">o</div>
            </div>
          </div>



import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import update from "react-addons-update";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Welcome";
import Category from "./Pages/Categories/Category";
import Description from "./Pages/Descriptions/Description";
import Cart from "./Pages/Cart";
import Minicart from "./Components/Minicart";
import Currencies from "./Components/Currencies";
import { BiDollar } from "react-icons/bi";
import { BiYen } from "react-icons/bi";
import { BiPound } from "react-icons/bi";
import { BiRuble } from "react-icons/bi";
import { ContextProvider } from "./Context";
import NotFound from "./Error";

// Bez atmaskām!!!



//before context

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [],
      minicartStyle: { display: "none" },
      minicartActive: false,
      currenciesStyle: { display: "none" },
      currenciesActive: false,
      chosenCurrency: ["USD", 0],
    };

    this.setSelectedItems = this.setSelectedItems.bind(this);
    this.setCounter = this.setCounter.bind(this);
    this.showMinicart = this.showMinicart.bind(this);
    this.showCurrencies = this.showCurrencies.bind(this);
    this.switchAttributes = this.switchAttributes.bind(this);
    this.setCurrency = this.setCurrency.bind(this);
    this.setCurrencySign = this.setCurrencySign.bind(this);
    this.cartCheck = this.cartCheck.bind(this);
  }

  showCurrencies = () => {
    this.state.currenciesActive
      ? this.setState({
          currenciesStyle: { display: "none" },
          currenciesActive: false,
        })
      : this.setState({
          currenciesStyle: { display: "block" },
          currenciesActive: true,
        });
  };

  setCurrency = (currency, index) => {
    this.setState({
      chosenCurrency: [currency, index],
    });
  };

  setCurrencySign = (currency) => {
    switch (currency[0]) {
      case "USD":
        return <BiDollar />;
      case "GBP":
        return <BiPound />;
      case "AUD":
        return <BiDollar />;
      case "JPY":
        return <BiYen />;
      case "RUB":
        return <BiRuble />;
      default:
        return <BiDollar />;
    }
  };

  showMinicart = () => {
    this.state.minicartActive
      ? this.setState({
          minicartStyle: { display: "none" },
          minicartActive: false,
        })
      : this.setState({
          minicartStyle: { display: "block" },
          minicartActive: true,
        });
  };

  setSelectedItems = (item) => {
    this.setState((prevState) => {
      return {
        selectedItems: [...prevState.selectedItems, item],
      };
    });
  };

  setCounter = (counter, index) => {
    this.setState(
      update(this.state, {
        selectedItems: {
          [index]: {
            [this.state.selectedItems[index].length - 2]: {
              $set: counter,
            },
          },
        },
      })
    );
  };

  switchAttributes = (index, attributeIndex, value) => {
    this.setState(
      update(this.state, {
        selectedItems: {
          [index]: {
            [attributeIndex]: {
              1: {
                $set: value,
              },
            },
          },
        },
      })
    );
  };

  cartCheck = (product) => {
    return this.state.selectedItems
      .map((a) => a.includes(product))
      .includes(true);
  };

  render() {
    const {
      selectedItems,
      minicartStyle,
      currenciesStyle,
      currenciesActive,
      chosenCurrency,
    } = this.state;

    return (
      <ContextProvider>
        <Router>
          <Navigation
          showMinicart={this.showMinicart}
          showCurrencies={this.showCurrencies}
          currency={chosenCurrency}
          setCurrencySign={this.setCurrencySign}
          currenciesActive={currenciesActive}
          selectedItems={selectedItems}
          />
          <Minicart
          style={minicartStyle}
          selectedItems={selectedItems}
          setCounter={this.setCounter}
          showMinicart={this.showMinicart}
          switchAttributes={this.switchAttributes}
          currency={chosenCurrency}
          setCurrencySign={this.setCurrencySign}
          />
          <Currencies
          style={currenciesStyle}
          setCurrency={this.setCurrency}
          chosenCurrency={chosenCurrency}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/cart">
              <Cart
              selectedItems={selectedItems}
              setCounter={this.setCounter}
              switchAttributes={this.switchAttributes}
              currency={chosenCurrency}
              setCurrencySign={this.setCurrencySign}
              />
            </Route>
            <Route
              exact
              path="/:category"
              render={({
                match: {
                  params: { category },
                },
              }) => (
                <Category
                  categoryName={category}
                  currency={chosenCurrency}
                  setCurrencySign={this.setCurrencySign}
                  cartCheck={this.cartCheck}
                />
              )}
            ></Route>
            <Route
              exact
              path="/:category/:id"
              render={({
                match: {
                  params: { id },
                },
              }) => (
                <Description
                  id={id}
                  setSelectedItems={this.setSelectedItems}
                  currency={chosenCurrency}
                  setCurrencySign={this.setCurrencySign}
                />
              )}
            ></Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    );
  }
}

export default App;

