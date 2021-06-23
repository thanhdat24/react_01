import React, { Component } from "react";

// import HeaderDemo from "../component/Demo/Header";

export default class DateBinding extends Component {
  // Tạo 1 thuộc tính
  name = "Le Thanh Dat";

  // Thuộc tính object student
  student = {
    name: "Ngọc Diệp",
    age: 20,
  };

  // Binding phương thức (hàm của lớp đối tượng)
  renderImg = () => {
    return (
      <img
        src="http://casestudy.cyberlearn.vn/image/covid.jpg"
        alt="covid.jpg"
      />
    );
  };

  renderMultiComponent = () => {
    return (
      <nav className="nav justify-content-center bg-dark">
        <a className="nav-link active" href="http://cyberlearn.vn">
          Active link
        </a>
        <a className="nav-link" href="http://cyberlearn.vn">
          Link
        </a>
        <a className="nav-link disabled" href="http://cyberlearn.vn">
          Disabled link
        </a>
      </nav>
    );
  };

  //render nội dung component chứa thông tin object
  renderInfoVirus = () => {
    const virus = {
      id: "Covid 19",
      name: "corona",
      where: "HCM",
      alias: "SARS-COV-2",
    };

    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="holder.js/100px180/" alt="virus.id" />
        <div className="card-body">
          <h4 className="card-title">{virus.name}</h4>
          <p className="card-text">{virus.alias}</p>
          <p className="card-text">{virus.where}</p>
          <p className="card-text">{virus.id}</p>
        </div>
      </div>
    );
  };
  render() {
    //Biến của hàm render => không sử dụng cho hàm khác
    const school = "DH Can Tho";
    const student1 = {
      name: "Thành Đạt",
      age: 19,
    };
    return (
      <div>
        <h1>React class component date binding</h1>
        <hr />
        <h1>
          hello {this.name} - School: {school}
        </h1>
        <h1>Binding object</h1>
        <h1>
          name: {this.student.name} - age: {this.student.age}
        </h1>
        <hr />
        <h1>
          name: {student1.name} - age: {student1.age}
        </h1>
        <h3>Binding function</h3>
        {this.renderImg()}
        {this.renderMultiComponent()}
        {this.renderInfoVirus()}
      </div>
    );
  }
}
