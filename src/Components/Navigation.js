import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import CATEGORY from "../Pages/Categories/CategoryQ";
import { FaBeer } from "react-icons/fa";
import "./Navigation.css";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.categoryRef = React.createRef();
  }

  render() {
    const { setCategory } = this.props;
    return (
      <Query query={CATEGORY}>
        {({ loading, data, error }) => {
          if (loading) return false;
          if (data) {
            const { categories } = data;
            return (
              <nav>
                {categories.map((category) => (
                  <NavLink
                    className="category"
                    key={category.name}
                    to={`/${category.name}`}
                    onClick={() => setCategory(category)}
                    activeClassName="active-link"
                  >
                    {category.name}
                  </NavLink>
                ))}
                <NavLink className="cart-icon" to={`/cart`}>
                  <FaBeer />
                </NavLink>
              </nav>
            );
          }
          if (error) return "error...";
        }}
      </Query>
    );
  }
}

export default Navigation;
