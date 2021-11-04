import React, { Component } from "react";
import Context from "../../Context";

export class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };
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
    console.log(gallery);
    return (
      <>
        <div className="small-image-container">
          {gallery.map((image, index) => (
            <img
              className="small-image"
              src={image}
              alt={name}
              style={{
                opacity: `${inStock ? "1" : "0.4"}`,
              }}
              onClick={() => {
                this.setImage(image);
              }}
              key={index}
            />
          ))}
        </div>
        <img
          className="big-image"
          src={image === "" ? gallery[0] : image}
          alt={name}
          style={{
            opacity: `${inStock ? "1" : "0.4"}`,
          }}
        />
      </>
    );
  }
}

export default Images;
