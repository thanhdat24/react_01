import React, { Component } from "react";

export default class RenderingCondition extends Component {
  login = true;
  userName = "Le Thanh Dat";

  renderContent = ()=>{
      if (this.login){
          return <p>Hello {this.userName}</p>;
      }
      return <button className="btn btn-primary">Đăng nhập</button>;
  }

  render() {
    return (
      <div>
        {/* {this.login ? <p>Hello {this.userName}</p>:
        <button className="btn btn-primary">Đăng nhập</button>} */}
        {this.renderContent()}
      </div>
    );
  }
}
