import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-blue-300">
      <div className="container mx-auto bg-blue-300">
        <div className="navbar  bg-blue-300">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              daisyUI
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
