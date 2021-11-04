import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../Context";

export class MinicartCheckout extends Component {
  static contextType = Context;
  render() {
    const { addedItems, showMinicart, currency, setCurrencySign } =
      this.context;
    let total = 0;
    return (
      <div className="minicart-checkout">
        <div className="total">
          <p>Total</p>
          {addedItems.map((item, index) => {
            total =
              total +
              item[item.length - 2] * item[item.length - 1][currency[1]];
            return index === addedItems.length - 1 ? (
              <p>
                {setCurrencySign([currency[0]])}
                {total}
              </p>
            ) : (
              false
            );
          })}
        </div>
        <div className="minicart-checkout-buttons">
          <NavLink
            className="minicart-button"
            to="/checkout"
            onClick={() => showMinicart()}
          >
            CHECKOUT
          </NavLink>
          <NavLink
            className="minicart-button"
            to="/cart"
            onClick={() => showMinicart()}
          >
            VIEW BAG
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MinicartCheckout;
