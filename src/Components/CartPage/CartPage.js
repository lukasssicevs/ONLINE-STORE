import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";

import DESCRIPTION from "../../Queries/DescriptionPageQuery";
import CartProductDetails from "./CartProductDetails";
import CartProductCounter from "./CartProductCounter";
import CartProductImages from "./CartProductImages";
import Context from "../../Context";
import "./CartPage.css";

export class CartPage extends Component {
  static contextType = Context;
  render() {
    const { addedItems } = this.context;
    return (
      <div className="cart-page">
        <h1 className="cart-page-header">CART</h1>
        {addedItems.map((item, itemIndex) => {
          return (
            <Query
              key={`${item[0]}:${itemIndex}`}
              query={DESCRIPTION}
              variables={{ productID: item[0] }}
            >
              {({ loading, data, error }) => {
                if (loading) return "loading...";
                if (error) return "error...";
                if (data) {
                  if (!data.product) {
                    return <Redirect to="/404" />;
                  }
                  const { gallery, name, brand, prices, attributes } =
                    data.product;
                  return (
                    <div className="cart-product">
                      <CartProductDetails
                        item={item}
                        name={name}
                        brand={brand}
                        prices={prices}
                        attributes={attributes}
                        itemIndex={itemIndex}
                      />
                      <CartProductCounter item={item} itemIndex={itemIndex} />
                      <CartProductImages gallery={gallery} name={name} />
                    </div>
                  );
                }
              }}
            </Query>
          );
        })}
      </div>
    );
  }
}

export default CartPage;
