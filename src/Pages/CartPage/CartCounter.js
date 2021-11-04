import React, { Component } from "react";
import Context from "../../Context";

export class CartCounter extends Component {
  static contextType = Context;
  render() {
    const { item, index } = this.props;
    const { setCounter } = this.context;
    return (
      <div className="counter-container">
        <button
          className="cart-counter-button"
          onClick={() => setCounter(item[item.length - 2] + 1, index)}
        >
          +
        </button>
        <div className="cart-product-counter">
          <p>{item[item.length - 2]}</p>
        </div>
        <button
          className="cart-counter-button"
          onClick={() => {
            setCounter(item[item.length - 2] - 1, index);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default CartCounter;
