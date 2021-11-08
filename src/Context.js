import React, { Component } from "react";
import update from "react-addons-update";

const Context = React.createContext();

export class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addedItems: [],
      currency: ["USD", 0],
    };
  }

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

  removeItem = (itemIndex) => {
    let addedItemArray = [...this.state.addedItems];
    addedItemArray.splice(itemIndex, 1);
    this.setState({
      addedItems: addedItemArray,
    });
  };

  countTotal = () => {
    let total = 0;

    this.state.addedItems.forEach((item) => {
      total =
        total +
        item[item.length - 2] * item[item.length - 1][this.state.currency[1]];
    });
    return total.toFixed(2);
  };

  render() {
    return (
      <Context.Provider
        value={{
          addedItems: this.state.addedItems,
          currency: this.state.currency,
          setCurrency: this.setCurrency,
          setCurrencySign: this.setCurrencySign,
          addItem: this.addItem,
          setCounter: this.setCounter,
          switchAttributes: this.switchAttributes,
          cartCheck: this.cartCheck,
          removeItem: this.removeItem,
          countTotal: this.countTotal,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
