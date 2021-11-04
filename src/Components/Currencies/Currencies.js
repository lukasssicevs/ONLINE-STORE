import React, { Component } from "react";
import CURRENCIES from "./CurrenciesQ";
import { Query } from "@apollo/client/react/components";
import "./Currencies.css";
import Context from "../../Context";

export class Currency extends Component {
  static contextType = Context;
  render() {
    const { currenciesStyle, setCurrency, chosenCurrency, setCurrencySign } =
      this.context;
    return (
      <Query query={CURRENCIES}>
        {({ loading, data, error }) => {
          if (loading) return false;
          if (data) {
            const { currencies } = data;
            return (
              <div className="currency-list" style={currenciesStyle}>
                {currencies.map((currency, currencyIndex) => (
                  <div className="currency">
                    <input
                      key={currency}
                      checked={currency === chosenCurrency ? true : false}
                      type="radio"
                      name="currency"
                      id={currency}
                      value={currency}
                      onChange={() => setCurrency(currency, currencyIndex)}
                    />
                    <label htmlFor={currency} key={`label:${currency}`}>
                      {setCurrencySign([currency])}
                      {currency}
                    </label>
                  </div>
                ))}
              </div>
            );
          }
          if (error) return "error...";
        }}
      </Query>
    );
  }
}

export default Currency;
