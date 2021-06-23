import React, { Component } from "react";

import BodyBTTH from "./BodyBTTH";
import FooterBTTH from "./FooterBTTH";
import HeaderBTTH from "./HeaderBTTH";

// import FooterBTTH from "./FooterBTTH";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderBTTH />
        <BodyBTTH />
        <FooterBTTH />
      </div>
    );
  }
}
