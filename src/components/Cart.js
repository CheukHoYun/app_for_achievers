import React, { Component } from "react";

class Cart extends Component {
  state = {};

  makeUL = (array) => {};

  orders = (o) => {
    const infos = o.map((movie) => (
      <li className="list-group-item" key={"order_" + movie.id}>
        {movie.title}
      </li>
    ));
    return infos;
  };
  render() {
    return (
      <div className="card" style={{ width: "600px" }}>
        <div className="card-header bg-primary text-white">
          <span className="glyphicon glyphicon-shopping-cart"></span> Your
          Shopping Cart
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">Thank you for shopping with us</h5>
          <p className="card-text">
            Click on Check Out, and you will proceed to entering credit card
            information.
          </p>
          <ul className="list-group list-group-flush">
            {this.orders(this.props.orders)}
          </ul>
          <button className="btn btn-warning m-2 float-right">Check Out</button>
        </div>
      </div>
    );
  }
}

export default Cart;
