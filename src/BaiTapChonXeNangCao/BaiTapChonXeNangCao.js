import "./BaiTapChonXeNangCao.css";

import React, { Component } from "react";

import dataFeatures from "../Data/arrayFeatures.json";
import dataWheels from "../Data/wheels.json";

// import mảng dữ liệu các model xe

export default class BaiTapChonXeNangCao extends Component {
  state = {
    carCurrent: {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
  };

  // Phương thức xử lý đổi se = cách set lại giá trị mới cho carCurrent từ cardItem

  changeCar = (newCar) => {
    this.setState({
      carCurrent: newCar,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeCar(item);
          }}
          className="row border m-3"
          style={{ cursor: "pointer" }}
          key={index}
        >
          <div className="col-2 my-2">
            <img style={{ width: "100%" }} src={item.img} alt={index} />
          </div>
          <div className="col-10">
            <h5 className="my-2">{item.title}</h5>
            <span>{item.type}</span>
          </div>
        </div>
      );
    });
  };

  changeWheel = (newWheel) => {
    // Tìm trong state hiện tại (this.state.carCurrent.wheels)
    let objWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
    if (objWheel!=-1){
      // lấy ra source hình ảnh từ this.state.carCurrent.wheels
      this.setState({
        carCurrent: {...this.state.carCurrent,srcImg:objWheel.srcImg}
      })
    }
  }
  
  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeWheel(item);
          }}
          className="row border m-3"
          style={{ cursor: "pointer" }}
          key={index}
        >
          <div className="col-2 my-3">
            <img style={{ width: "100%" }} src={item.img} alt={index} />
          </div>
          <div className="col-10">
            <h5 style={{ fontSize: "17px" }} className="mt-3">
              {item.title}
            </h5>
            <span>{item.price}</span>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    // Đây là phương thức có sẵn của component tự động thực thi sau khi render được gọi
    // Lưu ý: componentDidMount chỉ chạy 1 lần đầu tiên sau khi render thực thi
    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.6.0/js-cloudimage-360-view.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };

  componentDidUpdate = () => {
    // Hàm này chạy sau khi state thay đổi (Tự kíck hoạt sau render)
    // Lưu ý: Không được phép setState tại component này vì Infinity loop

    // clean ảnh của
    document.querySelector("#carCurrent").innerHTML = "";

    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";

    document.querySelector("#appendScript").appendChild(tagScript);
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              {/* <img
                style={{ width: "100%" }}
                src="./images/images-black/images-black-1/civic-1.jpg"
                alt=""
              /> */}
              <div
                id="carCurrent"
                className="cloudimage-360"
                data-folder={"./images/" + this.state.carCurrent.srcImg}
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>
              <div id="appendScript">{/* JS-CLOND IMAGE-360-VIEW  */}</div>
              <div className="card text-dark bg-light">
                <h6 className="card-header">Exterior Color</h6>
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">
                    See More LX Features
                  </h4>
                  <table className="table border border-color-light" border="1">
                    <thead>
                      <tr>
                        <td>Color</td>
                        <td>Black</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>$19.550</td>
                      </tr>
                      <tr>
                        <td>Engine Type</td>
                        <td>In-Line 4-Cylinder</td>
                      </tr>
                      <tr>
                        <td>Displacement</td>
                        <td>1996 cc</td>
                      </tr>
                      <tr>
                        <td>Horsepower (SAE net)</td>
                        <td>158 @ 6500 rpm</td>
                      </tr>
                      <tr>
                        <td>Torque (SAE net)</td>
                        <td>138 Ib - ft @ 4200 rpm</td>
                      </tr>
                      <tr>
                        <td>Redline</td>
                        <td>6700 rpm</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card text-dark bg-light">
                <div className="card-header text-primary font-weight-bold">
                  Exterior Color
                </div>
                <div className="container-fluid">{this.renderIcon()}</div>
                <div className="card-footer text-primary font-weight-bold">
                  Wheels
                </div>
                <div className="container-fluid">{this.renderWheels()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
