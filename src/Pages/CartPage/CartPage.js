import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import DESCRIPTION from "../DescriptionPage/DescriptionPageQuery";
import CartDetails from "./CartDetails";
import CartCounter from "./CartCounter";
import CartImages from "./CartImages";
import "./CartPage.css";
import Context from "../../Context";

export class CartPage extends Component {
  static contextType = Context;
  render() {
    const { addedItems } = this.context;
    return (
      <div className="cart-page">
        <h1 className="cart-page-header">CART</h1>
        {addedItems.map((item, index) => {
          return (
            <Query query={DESCRIPTION} variables={{ productID: item[0] }}>
              {({ loading, data, error }) => {
                if (loading) return "loading...";
                if (data) {
                  const { gallery, name, brand, prices, attributes } =
                    data.product;
                  return (
                    <div className="cart-product">
                      <CartDetails
                        item={item}
                        name={name}
                        brand={brand}
                        prices={prices}
                        attributes={attributes}
                        index={index}
                      />
                      <CartCounter item={item} index={index} />
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

export default CartPage;
