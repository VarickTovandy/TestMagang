import React, { useState } from "react";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          Company
        </a>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "ABOUT") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a href={item.path}>{item.title}</a>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <a href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;