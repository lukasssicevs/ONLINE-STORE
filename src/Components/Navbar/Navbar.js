import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Query } from "@apollo/client/react/components";

import Logo from "../../Assets/logo.svg";
import IconContainer from "./IconContainer";
import Minicart from "../Minicart/Minicart";
import Currencies from "../Currencies/Currencies";
import CATEGORY from "../../Queries/CategoryQuery";
import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minicartStyle: { display: "none" },
      minicartActive: false,
      currenciesStyle: { display: "none" },
      currenciesActive: false,
    };

    this.showCurrencies = this.showCurrencies.bind(this);
    this.showMinicart = this.showMinicart.bind(this);
  }

  showCurrencies = () => {
    this.state.currenciesActive
      ? this.setState({
          currenciesStyle: { display: "none" },
          currenciesActive: false,
        })
      : this.setState({
          currenciesStyle: { display: "block" },
          currenciesActive: true,
        });
  };

  showMinicart = () => {
    this.state.minicartActive
      ? this.setState({
          minicartStyle: { display: "none" },
          minicartActive: false,
        })
      : this.setState({
          minicartStyle: { display: "block" },
          minicartActive: true,
        });
  };

  render() {
    const { currenciesStyle, minicartStyle } = this.state;
    return (
      <Query query={CATEGORY}>
        {({ loading, data, error }) => {
          if (loading) return "loading...";
          if (error) return "error...";
          if (data) {
            if (!data.categories) {
              return <Redirect to="/404" />;
            }
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
                  <IconContainer
                    showMinicart={this.showMinicart}
                    showCurrencies={this.showCurrencies}
                  />
                </nav>
                <Minicart
                  minicartStyle={minicartStyle}
                  showMinicart={this.showMinicart}
                />
                <Currencies currenciesStyle={currenciesStyle} />
              </>
            );
          }
        }}
      </Query>
    );
  }
}

export default Navbar;
