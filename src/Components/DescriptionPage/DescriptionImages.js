import React, { Component } from "react";

import Context from "../../Context";
import "./DescriptionImages.css";

export class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };

    this.setImage = this.setImage.bind(this);
  }

  setImage = (image) => {
    this.setState({
      image: image,
    });
  };

  static contextType = Context;
  render() {
    const { name, gallery, inStock } = this.props;
    const { image } = this.state;
    return (
      <>
        <div className="small-image-container">
          {gallery.map((image, index) => (
            <img
              className="small-image"
              src={image}
              alt={name}
              style={{
                opacity: `${inStock ? "1" : "0.5"}`,
              }}
              onClick={() => {
                this.setImage(image);
              }}
              key={`${name}:${index}`}
            />
          ))}
        </div>
        <div className="big-image-container">
          <img
            className="big-image"
            src={image === "" ? gallery[0] : image}
            alt={name}
            style={{
              opacity: `${inStock ? "1" : "0.5"}`,
            }}
          />
          {inStock === false ? (
            <div className="description-outofstock-sign">OUT OF STOCK</div>
          ) : (
            false
          )}
        </div>
      </>
    );
  }
}

export default Images;
