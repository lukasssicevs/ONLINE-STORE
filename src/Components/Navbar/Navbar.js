import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import Minicart from "../Minicart/Minicart";
import Currencies from "../Currencies/Currencies";
import { GrCart } from "react-icons/gr";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import NAVIGATION from "./NavbarQuery";
import Context from "../../Context";
import "./Navbar.css";

export class Navbar extends Component {
  static contextType = Context;
  render() {
    const {
      showMinicart,
      showCurrencies,
      currenciesActive,
      currency,
      setCurrencySign,
      addedItems,
    } = this.context;
    return (
      <Query query={NAVIGATION}>
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
                        activeClassName="active-link"
                      >
                        {category.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="icon-container">
                    <div
                      className="currency-icon-container"
                      onClick={() => showCurrencies()}
                    >
                      {setCurrencySign([currency[0]])}
                      {currenciesActive ? <BiChevronUp /> : <BiChevronDown />}
                    </div>
                    <div
                      className="cart-icon-container"
                      onClick={() => showMinicart()}
                    >
                      <GrCart className="cart-icon" />
                      <div className="cart-item-counter">
                        <p>{addedItems.length}</p>
                      </div>
                    </div>
                  </div>
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
