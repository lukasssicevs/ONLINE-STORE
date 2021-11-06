import React, { Component } from "react";
import parse from "html-react-parser";

import DescriptionAttributes from "./DescriptionAttributes";
import Context from "../../Context";
import "./DescriptionDetails.css";

export class Details extends Component {
  static contextType = Context;

  render() {
    const { id, name, brand, prices, attributes, inStock, description } =
      this.props;
    const { currency, addItem, setCurrencySign } = this.context;
    let selected = [id];
    attributes.map((attribute) =>
      selected.push([attribute.name, attribute.items[0].value])
    );

    return (
      <div className="product-details">
        <p className="product-brand">{brand}</p>
        <p className="product-name">{name}</p>
        <form>
          <DescriptionAttributes
            id={id}
            attributes={attributes}
            name={name}
            selected={selected}
          />
          <p className="product-price-title">PRICE:</p>
          <p className="product-price-amount">
            {setCurrencySign([currency[0]])}
            {prices[currency[1]].amount}
          </p>
          <button
            disabled={inStock ? false : true}
            className={inStock ? "normal-button" : "disabled-button"}
            onClick={(event) => {
              event.preventDefault();
              if (inStock) {
                selected.push(1);
                selected.push(prices.map((price) => price.amount));
                addItem(selected);
              }
            }}
          >
            {inStock ? "ADD TO CART" : "OUT OF STOCK"}
          </button>
        </form>
        <div className="product-description">{parse(description)}</div>
      </div>
    );
  }
}

export default Details;
