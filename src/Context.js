import React, { Component } from "react";
import update from "react-addons-update";

const Context = React.createContext();

export class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addedItems: [],
      minicartStyle: { display: "none" },
      minicartActive: false,
      currenciesStyle: { display: "none" },
      currenciesActive: false,
      currency: ["USD", 0],
    };
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
      currency: [currency, index],
    });
  };

  setCurrencySign = (currency) => {
    switch (currency[0]) {
      case "USD":
        return "$";
      case "GBP":
        return "£";
      case "AUD":
        return "$";
      case "JPY":
        return "¥";
      case "RUB":
        return "₽";
      default:
        return "$";
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

  addItem = (item) => {
    this.setState((prevState) => {
      return {
        addedItems: [...prevState.addedItems, item],
      };
    });
  };

  setCounter = (counter, index) => {
    this.setState(
      update(this.state, {
        addedItems: {
          [index]: {
            [this.state.addedItems[index].length - 2]: {
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
        addedItems: {
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
    return this.state.addedItems.map((a) => a.includes(product)).includes(true);
  };

  render() {
    return (
      <Context.Provider
        value={{
          addedItems: this.state.addedItems,
          minicartStyle: this.state.minicartStyle,
          minicartActive: this.state.minicartActive,
          currenciesStyle: this.state.currenciesStyle,
          currenciesActive: this.state.currenciesActive,
          currency: this.state.currency,
          showCurrencies: this.showCurrencies,
          setCurrency: this.setCurrency,
          setCurrencySign: this.setCurrencySign,
          showMinicart: this.showMinicart,
          addItem: this.addItem,
          setCounter: this.setCounter,
          switchAttributes: this.switchAttributes,
          cartCheck: this.cartCheck,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
