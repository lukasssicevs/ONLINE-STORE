import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import badgeCart from "../../Assets/badgeCart.svg";
import Context from "../../Context";
import "./ListingPageImage.css";

export class ListingPageImage extends Component {
  static contextType = Context;
  render() {
    const { product, category } = this.props;
    const { cartCheck } = this.context;
    return (
      <NavLink
        to={`/${category}/${product.id}`}
        className="listing-page-link"
        key={product.id}
      >
        <img
          className="listing-page-image"
          src={product.gallery[0]}
          alt={product.name}
          style={{
            opacity: `${product.inStock ? "1" : "0.5"}`,
          }}
        />
        {product.inStock === false ? (
          <div className="outofstock-sign">OUT OF STOCK</div>
        ) : (
          false
        )}
        {cartCheck(product.id) ? (
          <div className="added-product-badge">
            <img src={badgeCart} alt="cart" />
          </div>
        ) : (
          false
        )}
      </NavLink>
    );
  }
}

export default ListingPageImage;
