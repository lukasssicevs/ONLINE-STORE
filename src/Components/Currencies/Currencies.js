import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";

import CURRENCIES from "../../Queries/CurrenciesQuery";
import Context from "../../Context";
import "./Currencies.css";

export class Currency extends Component {
  static contextType = Context;
  render() {
    const { currenciesStyle } = this.props;
    const { setCurrency, chosenCurrency, setCurrencySign } = this.context;
    return (
      <Query query={CURRENCIES}>
        {({ loading, data, error }) => {
          if (loading) return "loading..";
          if (error) return "error...";
          if (data) {
            if (!data.currencies) {
              return <Redirect to="/404" />;
            }
            const { currencies } = data;
            return (
              <div className="currency-list" style={currenciesStyle}>
                {currencies.map((currency, currencyIndex) => (
                  <div className="currency" key={currency}>
                    <input
                      checked={currency === chosenCurrency ? true : false}
                      type="radio"
                      name="currency"
                      id={currency}
                      value={currency}
                      onChange={() => setCurrency(currency, currencyIndex)}
                    />
                    <label htmlFor={currency}>
                      {setCurrencySign([currency])} {currency}
                    </label>
                  </div>
                ))}
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default Currency;
