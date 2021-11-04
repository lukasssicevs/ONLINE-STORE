import { gql } from "@apollo/client";

const DESCRIPTION = gql`
  query getProduct($productID: String!) {
    product(id: $productID) {
      id
      name
      brand
      gallery
      description
      inStock
      attributes {
        name
        type
        id
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency
      }
    }
  }
`;

export default DESCRIPTION;
