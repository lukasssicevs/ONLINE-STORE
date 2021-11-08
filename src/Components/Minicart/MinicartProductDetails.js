import React, { Component } from "react";

import Context from "../../Context";
import "./MinicartProductDetails.css";

export class MinicartDetails extends Component {
  static contextType = Context;
  render() {
    const { name, brand, prices, attributes, itemIndex } = this.props;
    const { currency, addedItems, switchAttributes, setCurrencySign } =
      this.context;

    return (
      <div className="minicart-product-details">
        <p>{brand}</p>
        <p>{name}</p>
        <p className="minicart-price">
          {setCurrencySign(currency[0])}
          {prices[currency[1]].amount}
        </p>

        {attributes.map((attribute, attributeIndex) => {
          return (
            <div
              className="minicart-product-attributes"
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
                    name={`minicart:${name}:${attribute.name}:${itemIndex}`}
                    value={attributeItem.value}
                    id={`minicart:${name}:${attribute.name}:${attributeItem.value}:${itemIndex}`}
                    onChange={() => {
                      switchAttributes(
                        itemIndex,
                        attributeIndex + 1,
                        attributeItem.value
                      );
                    }}
                  />
                  <label
                    htmlFor={`minicart:${name}:${attribute.name}:${attributeItem.value}:${itemIndex}`}
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

export default MinicartDetails;
