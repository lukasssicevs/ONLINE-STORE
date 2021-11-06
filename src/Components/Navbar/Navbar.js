import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Query } from "@apollo/client/react/components";

import Logo from "../../Assets/logo.svg";
import IconContainer from "./IconContainer";
import Minicart from "../Minicart/Minicart";
import Currencies from "../Currencies/Currencies";
import CATEGORY from "../../Queries/CategoryQuery";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <Query query={CATEGORY}>
        {({ loading, data, error }) => {
          if (loading) return "loading...";
          if (data) {
            const { categories } = data;
            return (
              <>
                <nav>
                  <div className="category-container">
                    {categories.map((category) => (
                      <NavLink
                        className="category"
                        key={category.name}
                        to={`/${category.name}`}
                        activeClassName="active-category"
                      >
                        {category.name}
                      </NavLink>
                    ))}
                  </div>
                  <NavLink className="logo" to={`/`}>
                    <img src={Logo} alt="logo" />
                  </NavLink>
                  <IconContainer />
                </nav>
                <Minicart />
                <Currencies />
              </>
            );
          }
          if (error) return "error...";
        }}
      </Query>
    );
  }
}

export default Navbar;
