import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";

import LIST from "../../Queries/ListingPageQuery";
import ListingPageImage from "./ListingPageImage";
import ListingPageDetails from "./ListingPageDetails";
import Context from "../../Context";
import "./ListingPage.css";

export class ListingPage extends Component {
  static contextType = Context;

  render() {
    const { category } = this.props;
    const { cartCheck } = this.context;
    return (
      <div className="listing-page">
        <h1 className="listing-page-title">{category}</h1>
        <div className="listing-page-product-container">
          <Query query={LIST} variables={{ category: category }}>
            {({ loading, data, error }) => {
              if (loading) return "loading...";
              if (data) {
                if (!data.category) {
                  return <Redirect to="/404" />;
                }
                const { products } = data.category;
                return (
                  <>
                    {products.map((product) => (
                      <div
                        className="listing-page-product"
                        style={{
                          boxShadow: `${
                            cartCheck(product.id)
                              ? "0px 4px 35px rgba(168, 172, 176, 0.19)"
                              : null
                          }`,
                        }}
                      >
                        <ListingPageImage
                          category={category}
                          product={product}
                        />
                        <ListingPageDetails product={product} />
                      </div>
                    ))}
                  </>
                );
              }
              if (error) return "error...";
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default ListingPage;
