import { gql } from "@apollo/client";

const CATEGORY = gql`
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
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export default CATEGORY;
