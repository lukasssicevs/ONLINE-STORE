import React, { Component } from "react";
import parse from "html-react-parser";
import DescriptionAttributes from "./DescriptionAttributes";
import "./DescriptionPage.css";
import Context from "../../Context";

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: "0.6",
    };
  }

  static contextType = Context;

  render() {
    const { id, name, brand, prices, attributes, inStock, description } =
      this.props;
    const { currency, addItem, setCurrencySign } = this.context;
    let selected = [id];
    selected.length = attributes.length + 1;
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
          <div className="product-price">
            <p>Price:</p>
            <p>
              {setCurrencySign([currency[0]])} {prices[currency[1]].amount}
            </p>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              selected.includes(undefined) || !inStock
                ? console.log("dont add")
                : selected.push(1) &&
                  selected.push(prices.map((price) => price.amount)) &&
                  addItem(selected);
            }}
          >
            ADD TO CART
          </button>
        </form>
        <div className="product-description">{parse(description)}</div>
      </div>
    );
  }
}

export default Details;
