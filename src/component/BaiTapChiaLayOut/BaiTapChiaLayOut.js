import React, { Component } from "react";

import HeaderDemo from "./HeaderDemo";
import Product from "./Product";

export default class BaiTapChiaLayOut extends Component {
  render() {
    return (
      <div>
        <HeaderDemo />
        <Product />
      </div>
    );
  }
}
