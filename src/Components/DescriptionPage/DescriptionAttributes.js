import React, { Component, Fragment } from "react";

import "./DescriptionAttributes.css";

export class DescriptionAttributes extends Component {
  render() {
    const { selected, attributes, name } = this.props;

    return (
      <>
        {attributes.map((attribute, attributeIndex) => {
          return (
            <React.Fragment key={`${name}:${attribute.name}`}>
              <p className="attribute-name">{attribute.name}:</p>
              <div className="product-attributes">
                {attribute.items.map((item, itemIndex) => {
                  return (
                    <div
                      className="attribute-item-container"
                      key={`${name}:${item.value}`}
                    >
                      <input
                        defaultChecked={itemIndex === 0 && true}
                        type="radio"
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
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}

export default DescriptionAttributes;
