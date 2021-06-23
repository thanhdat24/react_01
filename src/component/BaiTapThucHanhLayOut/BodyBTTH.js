import React, { Component } from "react";

import BannerBTTH from "./BannerBTTH";
import ItemBTTH from "./ItemBTTH";

export default class BodyBTTH extends Component {
  render() {
    return (
      <div className="container">
        <BannerBTTH />
        <div className="row">
          <div className="col-4 mb-5">
            <ItemBTTH />
          </div>
          <div className="col-4 mb-5">
            <ItemBTTH />
          </div>
          <div className="col-4 mb-5">
            <ItemBTTH />
          </div>
          <div className="col-4 mb-5">
            <ItemBTTH />
          </div>
          <div className="col-4 mb-5">
            <ItemBTTH />
          </div>
          <div className="col-4 mb-5">
            <ItemBTTH />
          </div>
        </div>
      </div>
    );
  }
}
