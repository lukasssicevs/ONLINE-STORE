import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../Context";
import "./MinicartFooter.css";

export class MinicartFooter extends Component {
  static contextType = Context;
  render() {
    const { addedItems, showMinicart, currency, setCurrencySign } =
      this.context;
    let total = 0;
    return (
      <div className="minicart-footer">
        <div className="total-container">
          <p className="total-name">Total</p>
          {addedItems.map((item, index) => {
            total =
              total +
              item[item.length - 2] * item[item.length - 1][currency[1]];
            return index === addedItems.length - 1 ? (
              <p className="total-amount">
                {setCurrencySign([currency[0]])}
                {total.toFixed(2)}
              </p>
            ) : (
              false
            );
          })}
        </div>
        <div className="minicart-footer-buttons">
          <NavLink
            className="minicart-button to-bag"
            to="/cart"
            onClick={() => showMinicart()}
          >
            VIEW BAG
          </NavLink>
          <NavLink
            className="minicart-button to-checkout"
            to="/checkout"
            onClick={() => showMinicart()}
          >
            CHECK OUT
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MinicartFooter;
