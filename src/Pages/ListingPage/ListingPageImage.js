import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import Context from "../../Context";

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
            opacity: `${product.inStock ? "1" : "0.4"}`,
          }}
        />
        {cartCheck(product.id) ? (
          <div className="added-products">
            <BiCart className="added-cart" />
          </div>
        ) : (
          false
        )}
      </NavLink>
    );
  }
}

export default ListingPageImage;
