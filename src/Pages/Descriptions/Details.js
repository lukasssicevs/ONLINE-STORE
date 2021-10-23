import React, { Component } from "react";
import parse from "html-react-parser";
import "./Description.css";

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributePairs: [],
    };
  }

  render() {
    const { name, prices, attributes, description } = this.props;
    const color = "Color";
    let attributeNumber = 0;

    return (
      <div className="product-details">
        <p className="product-name">{name}</p>
        <form>
          {attributes.map((attribute) => {
            attributeNumber++;

            console.log(attributeNumber);
            return (
              <>
                <p key={attribute.name}>{attribute.name}:</p>
                <div className="product-attributes" key={attribute.type}>
                  {attribute.items.map((item, index) => (
                    <>
                      <input
                        type="radio"
                        key={item.value}
                        name={attribute.name}
                        value={item.value}
                        id={item.value}
                        onClick={() => {
                          this.setState({
                            attributePairs: "l",
                          });
                        }}
                      />
                      <label
                        htmlFor={item.value}
                        key={index}
                        style={{
                          backgroundColor: `${
                            attribute.name === color ? item.value : null
                          }`,
                        }}
                      >
                        {attribute.name === color ? "" : item.value}
                      </label>
                    </>
                  ))}
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
              console.log(this.state.attributePairs);
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
