import React, { Component } from "react";
// no this statement
// React passes the props during runtime
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Shopping Cart
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <button className="btn btn-secondary btn-sm">
          CHAHAAT RESTAURANTS{" "}
        </button>
      </a>
    </nav>
  );
};

export default NavBar;
