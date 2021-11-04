import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import "./DescriptionPage.css";
import DESCRIPTION from "./DescriptionPageQuery";
import Images from "./DescriptionImages";
import Details from "./DescriptionDetails";
import Context from "../../Context";

export class DescriptionPage extends Component {
  static contextType = Context;

  render() {
    const { addItem, currency, setCurrencySign } = this.context;

    const { id } = this.props;
    return (
      <Query query={DESCRIPTION} variables={{ productID: id }}>
        {({ loading, data, error }) => {
          if (loading) return "loading...";
          if (!data || !data.product) {
            return <Redirect to="/404" />;
          }
          if (data) {
            const {
              name,
              prices,
              gallery,
              description,
              attributes,
              brand,
              inStock,
            } = data.product;

            return (
              <div className="description-page">
                <Images name={name} gallery={gallery} inStock={inStock} />
                <Details
                  name={name}
                  brand={brand}
                  prices={prices}
                  attributes={attributes}
                  inStock={inStock}
                  description={description}
                  id={id}
                />
              </div>
            );
          }
          if (error) return "error...";
        }}
      </Query>
    );
  }
}

export default DescriptionPage;
