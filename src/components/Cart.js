import React, { Component } from "react";

class Cart extends Component {
  state = {};

  price_Gen = (p) => {
    if (p > 20) {
      p = 20;
    }
    return Math.ceil(p) - 0.01;
  };

  orders = (o) => {
    const infos = o.map((movie) => (
      <li className="list-group-item" key={"order_" + movie.id}>
        <div>
          <button className="btn btn-secondary btn-sm m-2">
            <span className="glyphicon glyphicon-remove"></span>
          </button>
          {movie.title}
          <div className="float-right">${this.price_Gen(movie.popularity)}</div>
        </div>
      </li>
    ));
    return infos;
  };

  total_price = (o) => {
    let tt = 0;
    for (let i = 0; i < o.length; i++) {
      tt += this.price_Gen(o[i].popularity);
    }
    return tt;
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
          <div className="float-right font-weight-bold font-italic">
            {" "}
            Total (HST ex.): {this.total_price(this.props.orders)}
          </div>
          <button className="btn btn-warning m-2 float-left">Check Out</button>
        </div>
      </div>
    );
  }
}

export default Cart;
