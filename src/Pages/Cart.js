import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import DESCRIPTION from "./Descriptions/DescriptionQ";
import { CartDetails } from "./CartDetails";
import CartImages from "./CartImages";
import "./Cart.css";

export class Cart extends Component {
  render() {
    const { selectedItems } = this.props;
    console.log(selectedItems);
    return (
      <div className="cart-page">
        {selectedItems.map((item, index) => {
          return (
            <Query query={DESCRIPTION} variables={{ productID: item[0] }}>
              {({ loading, data, error }) => {
                if (loading) return "loading...";
                if (data) {
                  // console.log(data);
                  const { gallery, name, prices, attributes } = data.product;

                  return (
                    <div className="cart-product">
                      <CartDetails
                        item={item}
                        name={name}
                        prices={prices}
                        attributes={attributes}
                        index={index}
                      />
                      <CartImages gallery={gallery} name={name} />
                    </div>
                  );
                }
                if (error) return "error...";
              }}
            </Query>
          );
        })}
      </div>
    );
  }
}

export default Cart;
