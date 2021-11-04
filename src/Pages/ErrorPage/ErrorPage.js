import React, { Component } from "react";
import "./ErrorPage.css";

export class ErrorPage extends Component {
  render() {
    return (
      <div className="error-page" style={{ fontSize: "230px" }}>
        Page not found...
      </div>
    );
  }
}

export default ErrorPage;
