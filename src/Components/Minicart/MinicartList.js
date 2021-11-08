import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";

import MinicartProductDetails from "./MinicartProductDetails";
import MinicartProductCounter from "./MinicartProductCounter";
import DESCRIPTION from "../../Queries/DescriptionPageQuery";
import Context from "../../Context";
import "./MinicartList.css";

export class MinicartList extends Component {
  static contextType = Context;
  render() {
    const { addedItems } = this.context;
    return (
      <div className="minicart-list">
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
                    <div className="minicart-product">
                      <MinicartProductDetails
                        item={item}
                        name={name}
                        brand={brand}
                        prices={prices}
                        attributes={attributes}
                        itemIndex={itemIndex}
                      />
                      <MinicartProductCounter
                        itemIndex={itemIndex}
                        item={item}
                      />
                      <img
                        className="minicart-image"
                        src={gallery[0]}
                        alt={name}
                        key={name}
                      />
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

export default MinicartList;
