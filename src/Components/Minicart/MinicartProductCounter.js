import React, { Component } from "react";

import miniPlus from "../../Assets/miniPlus.svg";
import miniMinus from "../../Assets/miniMinus.svg";
import Context from "../../Context";
import "./MinicartProductCounter.css";

export class MinicartProductCounter extends Component {
  static contextType = Context;
  render() {
    const { setCounter } = this.context;
    const { item, itemIndex } = this.props;
    return (
      <div className="minicart-counter-container">
        <img
          className="minicart-counter-button"
          src={miniPlus}
          alt="plus-box"
          onClick={() => setCounter(item[item.length - 2] + 1, itemIndex)}
        />
        <div className="minicart-product-counter">{item[item.length - 2]}</div>
        <img
          className="minicart-counter-button"
          src={miniMinus}
          alt="minus-box"
          onClick={() => {
            item[item.length - 2] > 0
              ? setCounter(item[item.length - 2] - 1, itemIndex)
              : setCounter(item[item.length - 2] + 0, itemIndex);
          }}
        />
      </div>
    );
  }
}

export default MinicartProductCounter;
