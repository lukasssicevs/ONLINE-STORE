import React, { Component } from "react";

export class CartDetails extends Component {
  render() {
    const { name, prices, attributes, item, index } = this.props;
    const color = "Color";
    let n = 0;

    return (
      <div className="cart-product-details">
        <h1>{name}</h1>
        <p>
          {prices[0].currency} {prices[0].amount}
        </p>

        {attributes.map((attribute) => {
          n++;
          let selectedItem = item[n];
          console.log(selectedItem);
          console.log(name);
          console.log(index);

          return (
            <>
              <p key={attribute.name}>{attribute.name}:</p>
              <div className="cart-product-attributes" key={attribute.type}>
                {attribute.items.map((item, itemIndex) => (
                  <>
                    <input
                      defaultChecked={
                        item.value === selectedItem[1] ? true : false
                      }
                      type="radio"
                      key={item.value}
                      name={name + ":" + attribute.name + ":" + index}
                      value={item.value}
                      id={
                        name +
                        ":" +
                        attribute.name +
                        ":" +
                        item.value +
                        ":" +
                        index
                      }
                      onClick={({ target }) => {
                        console.log(target.id);
                        console.log(target.name);
                      }}
                    />
                    <label
                      htmlFor={
                        name +
                        ":" +
                        attribute.name +
                        ":" +
                        item.value +
                        ":" +
                        index
                      }
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
                ))}
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default CartDetails;
