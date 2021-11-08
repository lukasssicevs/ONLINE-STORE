import React, { Component } from "react";

import Minus from "../../Assets/minus.svg";
import Plus from "../../Assets/plus.svg";
import Context from "../../Context";
import "./CartProductCounter.css";

export class CartProductCounter extends Component {
  static contextType = Context;
  render() {
    const { item, itemIndex } = this.props;
    const { setCounter, removeItem } = this.context;
    return (
      <div className="counter-container">
        <img
          className="cart-counter-button"
          src={Plus}
          alt="plus-box"
          onClick={() => setCounter(item[item.length - 2] + 1, itemIndex)}
        />
        <div className="cart-product-counter">{item[item.length - 2]}</div>
        <img
          className="cart-counter-button"
          src={Minus}
          alt="minus-box"
          onClick={() => {
            item[item.length - 2] > 1
              ? setCounter(item[item.length - 2] - 1, itemIndex)
              : removeItem(itemIndex);
          }}
        />
      </div>
    );
  }
}

export default CartProductCounter;
