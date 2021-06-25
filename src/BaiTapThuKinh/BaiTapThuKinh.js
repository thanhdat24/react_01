import React, { Component } from "react";

import dataGlasses from "../Data/dataGlasses.json";

export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <div className="col-2 p-0">
          <img
            onClick={() => {
              {
                this.changeGlasses(glassesItem);
              }
            }}
            style={{
              width: "110px",
              margin: "13px 0",
              border: "2px solid #F4A460",
              cursor: "pointer",
            }}
            key={index}
            src={glassesItem.url}
            alt={glassesItem.id}
          />
        </div>
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    const keyFrame = `@keyframes animaChangeGlasses${Date.now()}{
        from {
          width: 0;
          // transform: rotate(45deg);
          opacity: 0,
        }
        to{
          width: 123px;
          //  transform: rotate(0deg);
            opacity: 0.7,
        }
    }`;

    const styleGlasses = {
      width: "123px",
      height: "43px",
      top: "78px",
      right: "208px",
      opacity: "0.7",
      //  transform: 'rotate(0deg)',
      animation: `animaChangeGlasses${Date.now()} 1s`,
    };

    const infoGlasses = {
      width: "250px",
      height: "100px",
      left: "145px",
      bottom: "0px",
      backgroundColor: "rgba(255 ,127 ,36,0.5)",
      textAlign: "left",
    };
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          height: "900px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>{keyFrame}</style>
        <div style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "1000px" }}>
          <h3
            style={{ backgroundColor: "rgba(224,102 ,255, 0.2)" }}
            className="text-center text-light text-uppercase py-5"
          >
            Try glasses app online
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className=""
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="model.jpg"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.glassesCurrent.url}
                    alt="v1.jpg"
                  />
                  <div style={infoGlasses} className="position-absolute">
                    <p
                      className="font-weight-bold ml-1 mb-1"
                      style={{ color: "#9B30FF" }}
                    >
                      {this.state.glassesCurrent.name}
                    </p>
                    <span
                      className="ml-1"
                      style={{ color: "#fff", fontSize: "14px" }}
                    >
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
              </div>
            </div>
          </div>
          {/* Div chứa các kính được chọn */}
          <div className="container text-center bg-light d-flex mt-5 justify-content-center">
            <div className="row"> {this.renderGlasses()}</div>
          </div>
        </div>
      </div>
    );
  }
}
