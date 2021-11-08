import { gql } from "@apollo/client";

const LIST = gql`
  query category($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        gallery
        id
        name
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

export default LIST;
