import "./Styling.css";

import React, { Component } from "react";

import Child from "./Child";
import style from "./Styling.module.css";

export default class Styling extends Component {
  render() {
    // Lưu ý: viết dưới dạng thuộc tính document.getElementById('id').style.backgroundColor
    const styleText = {
        color:'pink',
        padding: '20px',
        backgroundColor: 'blue',
    }

    
    return (
      <div>
        <Child />
        <p className="txt">Hello Dat</p>
        <span className={style.txtStyle}>Hello Dat Diep</span>
        <p style={styleText}>Thanh Dat 123123</p>
      </div>
    );
  }
}
