import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import NAVIGATION from "./NavigationQ";
import { FaBeer } from "react-icons/fa";
import "./Navigation.css";

export class Navigation extends Component {
  render() {
    const { setCategory } = this.props;
    return (
      <Query query={NAVIGATION}>
        {({ loading, data, error }) => {
          if (loading) return "loading...";
          if (data) {
            const { categories } = data;
            console.log(data);
            return (
              <nav>
                {categories.map((category) => (
                  <NavLink
                    className="category"
                    key={category.name}
                    to={`/${category.name}`}
                    onClick={() => setCategory(category.name)}
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
