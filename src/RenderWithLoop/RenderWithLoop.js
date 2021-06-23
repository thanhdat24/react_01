import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "back car",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 2000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 3000,
      img: "./carbasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 4000,
      img: "./carbasic/products/steel-car.jpg",
    },
  ];

  renderTable = () => {
    /* Cách 2: Dùng map */
    return this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: "100px" }} src={product.img} alt={product.id} />
          </td>
          <td></td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table text-center">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
