import React, { Component } from "react";
import Context from "../../Context";

export class MinicartDetails extends Component {
  static contextType = Context;
  render() {
    const { name, brand, prices, attributes, index } = this.props;
    const { currency, addedItems, switchAttributes } = this.context;

    return (
      <div className="minicart-product-details">
        <h1>{brand}</h1>
        <h2>{name}</h2>
        <p>
          {currency[0]} {prices[currency[1]].amount}
        </p>

        {attributes.map((attribute, attributeIndex) => {
          return (
            <>
              <p key={attribute.name}>{attribute.name}:</p>
              <div className="minicart-product-attributes" key={attribute.type}>
                {attribute.items.map((item, itemIndex) => (
                  <>
                    <input
                      checked={
                        item.value === addedItems[index][attributeIndex + 1][1]
                          ? true
                          : false
                      }
                      type="radio"
                      key={item.value}
                      name={`minicart:${name}:${attribute.name}:${index}`}
                      value={item.value}
                      id={`minicart:${name}:${attribute.name}:${item.value}:${index}`}
                      onChange={() => {
                        switchAttributes(index, attributeIndex + 1, item.value);
                      }}
                    />
                    <label
                      htmlFor={`minicart:${name}:${attribute.name}:${item.value}:${index}`}
                      key={itemIndex}
                      style={{
                        backgroundColor: `${
                          attribute.name === "Color" ? item.value : null
                        }`,
                      }}
                    >
                      {attribute.name === "Color" ? "" : item.value}
                    </label>
                  </>
                ))}
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default MinicartDetails;
