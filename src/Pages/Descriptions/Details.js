import React, { Component } from "react";
import parse from "html-react-parser";
import "./Description.css";

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: "0.6",
    };
  }

  render() {
    const { id, name, prices, attributes, description, setSelectedItems } =
      this.props;
    const color = "Color";
    let selected = [id];
    selected.length = attributes.length + 1;
    return (
      <div className="product-details">
        <p className="product-name">{name}</p>
        <form>
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
          <div className="product-price">
            <p>Price:</p>
            <p>
              {prices[0].currency} {prices[0].amount}
            </p>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              selected.includes(undefined)
                ? console.log("dont add")
                : setSelectedItems(selected);
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
