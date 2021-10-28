import { gql } from "@apollo/client";

const CATEGORY = gql`
  query category($categoryName: String!) {
    category(input: { title: $categoryName }) {
      name
      products {
        gallery
        id
        name
        attributes {
          id
          name
          type
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
        inStock
        brand
      }
    }
  }
`;

export default CATEGORY;