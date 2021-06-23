import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //Định nghĩa hàm xử lý sự kiện khi người dùng click vào button click me
    handleClick = (name)=>{
        alert("Hello: " + name);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={() =>{
                   this.handleClick('Dat')
                }}>Click me!</button>
            </div>
        )
    }
}
