import React, { Component } from "react";
import Context from "../../Context";

export class CartImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
    };
  }

  static contextType = Context;

  render() {
    const { gallery, name } = this.props;
    return (
      <div className="cart-images-container">
        <div
          className="left-button"
          onClick={() =>
            this.state.imageIndex > 0
              ? this.setState((prevState) => {
                  return {
                    imageIndex: prevState.imageIndex - 1,
                  };
                })
              : false
          }
        >
          o
        </div>
        <img
          className="cart-product-image"
          src={gallery[this.state.imageIndex]}
          alt={name}
        />
        <div
          className="right-button"
          onClick={() =>
            this.state.imageIndex < gallery.length - 1
              ? this.setState((prevState) => {
                  return {
                    imageIndex: prevState.imageIndex + 1,
                  };
                })
              : false
          }
        >
          o
        </div>
      </div>
    );
  }
}

export default CartImages;
