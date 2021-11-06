import React, { Component } from "react";

import toLeft from "../../Assets/toRight.svg";
import toRight from "../../Assets/toLeft.svg";
import Context from "../../Context";
import "./CartProductImages.css";

export class CartProductImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
    };

    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  previousImage = () => {
    return this.state.imageIndex > 0
      ? this.setState((prevState) => {
          return {
            imageIndex: prevState.imageIndex - 1,
          };
        })
      : false;
  };

  nextImage = (gallery) => {
    return this.state.imageIndex < gallery.length - 1
      ? this.setState((prevState) => {
          return {
            imageIndex: prevState.imageIndex + 1,
          };
        })
      : false;
  };

  static contextType = Context;

  render() {
    const { gallery, name } = this.props;

    return (
      <div className="cart-images-container">
        <img
          src={toLeft}
          alt="arrow-left"
          className="left-button"
          onClick={() => this.previousImage()}
        />
        <img
          className="cart-product-image"
          src={gallery[this.state.imageIndex]}
          alt={name}
        />
        <img
          src={toRight}
          alt="arrow-right"
          className="right-button"
          onClick={() => this.nextImage(gallery)}
        />
      </div>
    );
  }
}

export default CartProductImages;
