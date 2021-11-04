import React, { Component } from "react";
import Context from "../../Context";

export class MinicartCounter extends Component {
  static contextType = Context;
  render() {
    const { setCounter } = this.context;
    const { item, index } = this.props;
    return (
      <div className="minicart-counter-container">
        <button
          className="minicart-counter-button"
          onClick={() => setCounter(item[item.length - 2] + 1, index)}
        >
          +
        </button>
        <div className="minicart-product-counter">
          <p>{item[item.length - 2]}</p>
        </div>
        <button
          className="minicart-counter-button"
          onClick={() => {
            item[item.length - 2] > 0
              ? setCounter(item[item.length - 2] - 1, index)
              : setCounter(item[item.length - 2] + 0, index);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default MinicartCounter;
