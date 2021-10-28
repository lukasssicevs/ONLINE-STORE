import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import CATEGORY from "./CategoryQ";
import "./Category.css";

export class Category extends Component {
  render() {
    const { categoryName, setCategory, setProduct } = this.props;
    console.log(categoryName);
    return (
      <div className="listing-page">
        <h1 className="listing-page-title">{categoryName}</h1>
        <div className="listing-page-products">
          <Query query={CATEGORY} variables={{ categoryName: categoryName }}>
            {({ loading, data, error }) => {
              if (loading) return "loading...";
              if (data) {
                const { products } = data.category;
                console.log(products);
                return (
                  <>
                    {products.map((product) => (
                      <NavLink
                        to={`/${categoryName}/${product.name}`}
                        className="listing-page-product"
                        onClick={() => {
                          setCategory(categoryName);
                          setProduct(product);
                        }}
                        key={product.id}
                      >
                        <img
                          className="listing-page-image"
                          src={product.gallery[0]}
                          alt={product.name}
                        />
                        <p className="listing-page-name">{product.name}</p>
                        <p className="listing-page-price">
                          {product.prices[0].currency}
                          {product.prices[0].amount}
                        </p>
                      </NavLink>
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

export default Category;
