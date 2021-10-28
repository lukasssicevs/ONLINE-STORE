import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

<Router>
  <Navbar />
  <Switch>
    <Route exact path="/products">
      <Products />
    </Route>
    <Route path="/description">
      <Description />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
  </Switch>
</Router>;

console.log(data);
const { currencies, categories } = data;
return (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: "200px",
    }}
  >
    <div>
      {currencies.map((currency) => (
        <p key={currency}>{currency}</p>
      ))}
    </div>
    <div style={{ fontSize: "50px", textAlign: "center" }}>
      {categories.map((category) => (
        <p key={category.name}>{category.name}</p>
      ))}
    </div>
  </div>
);

import { gql } from "@apollo/client";

const QUERY = gql`
  query {
    categories {
      name
      products{
        id
        name
        inStock
        gallery
        category
        brand
        prices{
          currency
          amount
        }
      }
    }
    product(id: "ps-5") {
      id
      name
      gallery
      description
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
    currencies
    category {
      name
      products {
        id
        category
      }
    }
  }
`;

export default QUERY;



return (
  <Query query={}>
    {({ loading, data, error }) => {
      if (loading) return false;
      if (data) {
        const {  } = data;
        return (
          <div></div>
        );
      }
      if (error) return "error...";
    }}
  </Query>
);


<div className="cart-product">
            <div className="cart-product-details"></div>
            <div className="cart-images-container">
              <div className="left-button">o</div>
              <img className="cart-product-image" src={image} />
              <div className="right-button">o</div>
            </div>
          </div>
