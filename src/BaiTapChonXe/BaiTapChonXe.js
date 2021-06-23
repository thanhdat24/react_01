import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgProduct: require("../assets/products/black-car.jpg").default,
  };

  renderCar = (imgNewProduct) => {
    // Tạo 1 state new
    this.setState({
      imgProduct: imgNewProduct,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={this.state.imgProduct}
              alt="black_car"
            />
          </div>
          <div className="col-5">
            <div className="card text-black">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-red py-2"
                  onClick={() => {
                    this.renderCar(
                      require("../assets/products/black-car.jpg").default
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-black.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h3>Crystall Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div
                  className="row border border-red py-2 mt-2"
                  onClick={() => {
                    this.renderCar(
                      require("../assets/products/steel-car.jpg").default
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-steel.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h3>Modern Steel</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div
                  className="row border border-red py-2 mt-2"
                  onClick={() => {
                    this.renderCar(
                      require("../assets/products/silver-car.jpg").default
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-silver.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h3>Lunar Silver</h3>
                    <p>Metallic</p>
                  </div>
                </div>
                <div
                  className="row border border-red py-2 mt-2"
                  onClick={() => {
                    this.renderCar(
                      require("../assets/products/red-car.jpg").default
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-red.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h3>Rallye Red</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
