import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import "./Description.css";
import DESCRIPTION from "./DescriptionQ";
import Images from "./Images";
import Details from "./Details";

export class Description extends Component {
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

  render() {
    const { id } = this.props;
    const { image } = this.state;
    return (
      <Query query={DESCRIPTION} variables={{ productID: id }}>
        {({ loading, data, error }) => {
          if (loading) return false;
          if (data) {
            console.log(data);
            const { name, prices, gallery, description, attributes } =
              data.product;
            return (
              <div className="description-page">
                <Images
                  name={name}
                  gallery={gallery}
                  setImage={this.setImage}
                  image={image}
                />
                <Details
                  name={name}
                  prices={prices}
                  attributes={attributes}
                  description={description}
                />
              </div>
            );
          }
          if (error) return "error...";
        }}
      </Query>
    );
  }
}

export default Description;
