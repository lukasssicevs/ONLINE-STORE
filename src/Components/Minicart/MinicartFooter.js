import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Context from "../../Context";
import "./MinicartFooter.css";

export class MinicartFooter extends Component {
  static contextType = Context;
  render() {
    const { currency, setCurrencySign, countTotal } = this.context;
    const { showMinicart } = this.props;
    return (
      <div className="minicart-footer">
        <div className="total-container">
          <p className="total-name">Total</p>
          <p className="total-amount">
            {setCurrencySign([currency[0]])}
            {countTotal()}
          </p>
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
