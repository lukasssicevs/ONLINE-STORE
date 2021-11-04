import React, { Component } from "react";

export class DescriptionAttributes extends Component {
  render() {
    const { selected, attributes, name } = this.props;
    const color = "Color";

    return (
      <>
        {attributes.map((attribute, attributeIndex) => {
          return (
            <>
              <p key={name + ":" + attribute.name}>{attribute.name}:</p>
              <div className="product-attributes" key={attribute.type}>
                {attribute.items.map((item, itemIndex) => {
                  return (
                    <>
                      <input
                        type="radio"
                        key={name + ":" + item.value}
                        name={attribute.name}
                        value={item.value}
                        id={attribute.name + ":" + item.value}
                        onClick={() => {
                          selected[attributeIndex + 1] = [
                            attribute.name,
                            item.value,
                          ];
                        }}
                      />
                      <label
                        htmlFor={attribute.name + ":" + item.value}
                        key={itemIndex}
                        style={{
                          backgroundColor: `${
                            attribute.name === color ? item.value : null
                          }`,
                        }}
                      >
                        {attribute.name === color ? "" : item.value}
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
