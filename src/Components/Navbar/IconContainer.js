import React, { Component } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

import Cart from "../../Assets/cart.svg";
import Context from "../../Context";
import "./IconContainer.css";

export class IconContainer extends Component {
  static contextType = Context;
  render() {
    const { currenciesActive, currency, setCurrencySign, addedItems } =
      this.context;
    const { showMinicart, showCurrencies } = this.props;
    return (
      <div className="icon-container">
        <div
          className="currency-icon-container"
          onClick={() => showCurrencies()}
        >
          {setCurrencySign([currency[0]])}
          {currenciesActive ? <BiChevronUp /> : <BiChevronDown />}
        </div>
        <div className="cart-icon-container" onClick={() => showMinicart()}>
          <img src={Cart} alt="cart" className="cart-icon" />
          <div className="cart-item-counter">{addedItems.length}</div>
        </div>
      </div>
    );
  }
}

export default IconContainer;
