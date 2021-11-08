import React, { Component } from "react";

import Context from "../../Context";
import "./CartProductDetails.css";

export class CartProductDetails extends Component {
  static contextType = Context;
  render() {
    const { name, brand, prices, attributes, itemIndex } = this.props;
    const { currency, setCurrencySign, addedItems, switchAttributes } =
      this.context;

    return (
      <div className="cart-product-details">
        <p className="cart-product-brand">{brand}</p>
        <p className="cart-product-name">{name}</p>
        <p className="cart-product-price">
          {setCurrencySign(currency[0])}
          {prices[currency[1]].amount}
        </p>

        {attributes.map((attribute, attributeIndex) => {
          return (
            <div
              className="cart-product-attributes"
              key={`${attribute.type}:${attributeIndex}`}
            >
              {attribute.items.map((attributeItem) => (
                <React.Fragment
                  key={`${attribute.name}:${attributeItem.value}`}
                >
                  <input
                    checked={
                      attributeItem.value ===
                      addedItems[itemIndex][attributeIndex + 1][1]
                        ? true
                        : false
                    }
                    type="radio"
                    name={`${name}:${attribute.name}:${itemIndex}`}
                    value={attributeItem.value}
                    id={`${name}:${attribute.name}:${attributeItem.value}:${itemIndex}`}
                    onChange={() => {
                      switchAttributes(
                        itemIndex,
                        attributeIndex + 1,
                        attributeItem.value
                      );
                    }}
                  />
                  <label
                    htmlFor={`${name}:${attribute.name}:${attributeItem.value}:${itemIndex}`}
                    className={
                      attribute.name === "Color"
                        ? "color-label"
                        : "normal-label"
                    }
                    style={{
                      backgroundColor: `${
                        attribute.name === "Color" ? attributeItem.value : null
                      }`,
                    }}
                  >
                    {attribute.name === "Color" ? "" : attributeItem.value}
                  </label>
                </React.Fragment>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CartProductDetails;
