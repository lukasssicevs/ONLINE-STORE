import React, { Component } from "react";

import Context from "../../Context";
import "./ListingPageDetails.css";

export class ListingPageDetails extends Component {
  static contextType = Context;
  render() {
    const { setCurrencySign, currency } = this.context;
    const { product } = this.props;
    return (
      <>
        <p
          className="listing-page-name"
          style={{
            opacity: `${product.inStock ? "1" : "0.5"}`,
          }}
        >
          {product.brand} {product.name}
        </p>

        <p
          className="listing-page-price"
          style={{
            opacity: `${product.inStock ? "1" : "0.5"}`,
          }}
        >
          {setCurrencySign([currency[0]])}
          {product.prices[currency[1]].amount}
        </p>
      </>
    );
  }
}

export default ListingPageDetails;
