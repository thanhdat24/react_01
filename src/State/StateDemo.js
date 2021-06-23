import React, { Component } from "react";

export default class StateDemo extends Component {
  // state: là thuộc tính có sẵn của react class component giúp định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
  state = {
    status: false,
  };

  // setState là phương thức có sẵn của react class component giúp thay đổi giá trị state và render lại giao diện

  userLogin = {
    name: "Thành Đạt",
    age: 20,
  };

  login = () => {
    //   this.state.status = true; // không set giá trị trực tiếp trên state mà phải thông qua phương thức setState ==> Giao diện kh render lại
    let newState = {
      status: true,
    };
    // setState: là phương thức bất đồng bộ
    // + Tham số 1: giá trị mới 
    // + Tham số 2: callback thực thi ngay sau khi state thay đổi
    this.setState(newState,()=>{
        console.log(this.state);
    });
    // console.log(this.state);
  };

  renderUserLogin = () => {
    if (this.state.status)
      return <div className="text-center">{this.userLogin.name}</div>;
    else
      return (
        <button
          className="btn btn-primary"
          onClick={() => {
            this.login();
          }}
        >
          Đăng nhập
        </button>
      );
  };

  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}
