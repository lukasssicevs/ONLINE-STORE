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
    const { id, setSelectedItems } = this.props;
    const { image } = this.state;
    console.log(id);
    return (
      <Query query={DESCRIPTION} variables={{ productID: id }}>
        {({ loading, data, error }) => {
          if (loading) return "loading...";
          if (data) {
            const { name, prices, gallery, description, attributes } =
              data.product;
            console.log(data);
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
                  setSelectedItems={setSelectedItems}
                  id={id}
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
