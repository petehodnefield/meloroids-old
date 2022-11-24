import React, { Component } from "react";

export class NavLinks extends Component {
  render() {
    return (
      <div className="nav-links-wrapper">
        <ul className="nav__ul">
          <li>
            <a className="p1">Train</a>
          </li>
          <li>
            <a className="p1">Learn</a>
          </li>
          <li>
            <a className="p1">Stats</a>
          </li>

          <button className="pill btn-tertiary p1">Login</button>
        </ul>
      </div>
    );
  }
}

export default NavLinks;
