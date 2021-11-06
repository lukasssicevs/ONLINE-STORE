import React, { Component } from "react";

import "./DescriptionAttributes.css";

export class DescriptionAttributes extends Component {
  render() {
    const { selected, attributes, name } = this.props;

    return (
      <>
        {attributes.map((attribute, attributeIndex) => {
          return (
            <>
              <p
                className="attribute-name"
                key={`${name}:${attribute.name}:${attributeIndex}`}
              >
                {attribute.name}:
              </p>
              <div
                className="product-attributes"
                key={`${name}:${attribute.type}:${attributeIndex}`}
              >
                {attribute.items.map((item, itemIndex) => {
                  return (
                    <>
                      <input
                        defaultChecked={itemIndex === 0 && true}
                        type="radio"
                        key={`${name}:${item.value}`}
                        name={attribute.name}
                        value={item.value}
                        id={`${attribute.name}:${item.value}`}
                        onClick={() => {
                          selected[attributeIndex + 1] = [
                            attribute.name,
                            item.value,
                          ];
                        }}
                      />
                      <label
                        htmlFor={`${attribute.name}:${item.value}`}
                        key={itemIndex}
                        className={
                          attribute.name === "Color"
                            ? "color-label"
                            : "normal-label"
                        }
                        style={{
                          backgroundColor: `${
                            attribute.name === "Color" ? item.value : null
                          }`,
                        }}
                      >
                        {attribute.name === "Color" ? "" : item.value}
                      </label>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default DescriptionAttributes;
