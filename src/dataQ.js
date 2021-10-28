import { gql } from "@apollo/client";

const DATA = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        category
        brand
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
          currency
          amount
        }
      }
    }
  }
`;

export default DATA;
