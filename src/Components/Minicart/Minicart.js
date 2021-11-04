import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import MinicartDetails from "./MinicartDetails";
import MinicartCounter from "./MinicartCounter";
import MinicartCheckout from "./MinicartCheckout";
import DESCRIPTION from "../../Pages/DescriptionPage/DescriptionPageQuery";
import Context from "../../Context";
import "./Minicart.css";

export class Minicart extends Component {
  static contextType = Context;
  render() {
    const { minicartStyle, addedItems, switchAttributes, currency } =
      this.context;

    return (
      <div className="minicart" style={minicartStyle}>
        <div className="minicart-title">
          <p>My bag, {addedItems.length} items</p>
        </div>
        <div className="minicart-list">
          {addedItems.map((item, index) => {
            return (
              <Query query={DESCRIPTION} variables={{ productID: item[0] }}>
                {({ loading, data, error }) => {
                  if (loading) return "loading...";
                  if (data) {
                    const { gallery, name, brand, prices, attributes } =
                      data.product;
                    return (
                      <div className="minicart-product">
                        <MinicartDetails
                          item={item}
                          name={name}
                          brand={brand}
                          prices={prices}
                          attributes={attributes}
                          index={index}
                        />
                        <MinicartCounter index={index} item={item} />
                        <img
                          className="minicart-image"
                          src={gallery[0]}
                          alt={name}
                        />
                      </div>
                    );
                  }
                  if (error) return "error...";
                }}
              </Query>
            );
          })}
        </div>
        <MinicartCheckout />
      </div>
    );
  }
}

export default Minicart;
