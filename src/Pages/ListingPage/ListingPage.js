import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import Context from "../../Context";
import LIST from "./ListingPageQuery";
import "./ListingPage.css";
import ListingPageImage from "./ListingPageImage";

export class ListingPage extends Component {
  static contextType = Context;

  render() {
    const { category } = this.props;
    const { currency, setCurrencySign, cartCheck } = this.context;
    return (
      <div className="listing-page">
        <h1 className="listing-page-title">{category}</h1>
        <div className="listing-page-products">
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
                              ? "0px 0px 10px 5px grey"
                              : null
                          }`,
                        }}
                      >
                        <ListingPageImage
                          category={category}
                          product={product}
                        />
                        <p>{product.brand}</p>
                        <p className="listing-page-name">{product.name}</p>

                        <p className="listing-page-price">
                          {setCurrencySign([currency[0]])}
                          {product.prices[currency[1]].amount}
                        </p>
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
