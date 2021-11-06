import React, { Component } from "react";

import MinicartList from "./MinicartList";
import MinicartFooter from "./MinicartFooter";
import Context from "../../Context";
import "./Minicart.css";

export class Minicart extends Component {
  static contextType = Context;
  render() {
    const { minicartStyle, addedItems, showMinicart } = this.context;

    return (
      <>
        <div
          className="minicart-focus"
          style={minicartStyle}
          onClick={() => showMinicart()}
        ></div>
        <div className="minicart" style={minicartStyle}>
          <div className="minicart-head">
            <span className="my-bag">My Bag</span>
            <span>, {addedItems.length} items</span>
          </div>
          <MinicartList />
          <MinicartFooter />
        </div>
      </>
    );
  }
}

export default Minicart;
