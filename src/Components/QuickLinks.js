import React from "react";
import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <>
      <h5 className="font-weight-bold mb-4">Quick Links</h5>
      <div className="d-flex flex-column justify-content-start">
        <Link className="mb-2 text-hover text-decoration-none text-dark" to="/">
          <i className="fa fa-angle-right mr-2"></i>
          Home
        </Link>
        <Link
          className="mb-2 text-hover text-decoration-none text-dark"
          to="/shop"
        >
          <i className="fa fa-angle-right mr-2"></i>
          Our Shop
        </Link>
        <Link
          className="mb-2 text-hover text-decoration-none text-dark"
          to="/shopDetail"
        >
          <i className="fa fa-angle-right mr-2"></i>
          Shop Detail
        </Link>
        <Link
          className="mb-2 text-hover text-decoration-none text-dark"
          to="/shoppingCart"
        >
          <i className="fa fa-angle-right mr-2"></i>
          Shopping Cart
        </Link>
        <Link
          className="mb-2 text-hover text-decoration-none text-dark"
          to="/checkout"
        >
          <i className="fa fa-angle-right mr-2"></i>
          Checkout
        </Link>
        <Link
          className="text-hover text-decoration-none text-dark"
          to="/contact"
        >
          <i className="fa fa-angle-right mr-2"></i>
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default QuickLinks;