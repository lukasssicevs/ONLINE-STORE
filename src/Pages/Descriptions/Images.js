import React, { Component } from "react";

export class Images extends Component {
  render() {
    const { name, gallery, image, setImage } = this.props;
    return (
      <>
        <div className="small-image-container">
          {gallery.map((image, index) => (
            <img
              className="small-image"
              src={image}
              alt={name}
              onClick={() => {
                setImage(image);
              }}
              key={index}
            />
          ))}
        </div>
        <img
          className="big-image"
          src={image === "" ? gallery[0] : image}
          alt={name}
        />
      </>
    );
  }
}

export default Images;
