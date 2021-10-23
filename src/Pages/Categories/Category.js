import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Category.css";

export class Category extends Component {
  render() {
    const { category, setCategory, setProduct } = this.props;
    const { products } = this.props.category;

    return (
      <>
        <h1 className="listing-page-title">{category.name}</h1>
        <div className="listing-page" style={{ display: "grid" }}>
          {products.map((product) => (
            <NavLink
              to={`/${category.name}/${product.name}`}
              className="listing-page-product"
              style={{ display: "grid" }}
              onClick={() => {
                setCategory(category);
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
        </div>
      </>
    );
  }
}

export default Category;
