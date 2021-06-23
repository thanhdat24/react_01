import React, { Component } from "react";

import dataFilms from "../Data/DataFilms.json";

export default class BaiTapRenderFilms extends Component {
  // Rút ngắn gọn text
  renderText = (film, index) => {
    if (film.moTa.length > 80) {
      return <p>{film.moTa.substr(0, 80)}...</p>;
    } else {
      <p>{film.moTa}</p>;
    }
  };

  renderFilms = () => {
    return dataFilms.map((film, index) => {
      return (
        <div className="col-3 mt-5 text-primary" key={index}>
          <div
            className="card text-white bg-primary ml-5"
            style={{ width: "200px" }}
          >
            <img
              style={{ width: "198px", height: "300px" }}
              className="card-img-top"
              src={film.hinhAnh}
              alt={film.maPhim}
            />
            <div className="card-body bg-dark">
              <h4
                className="card-title"
                style={{ fontSize: "17px", height: "50px" }}
              >
                {film.tenPhim}
              </h4>
              <p className="card-text" style={{ fontSize: "13px" }}>
                {this.renderText(film, index)}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  //1: Xây dựng giao diện
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./background/avengers.jpg)",
          minHeight: "750px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "750px" }}>
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{ backgroundColor: "rgba(87,83,149,0.8)" }}
          >
            <a className="navbar-brand" href="https://cyberlearn.vn/">
              CyberLearn Movie
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="https://cyberlearn.vn/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://cyberlearn.vn/">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="https://cyberlearn.vn/"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="https://cyberlearn.vn/">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="https://cyberlearn.vn/#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row">{this.renderFilms()}</div>
          </div>
        </div>
      </div>
    );
  }
}
