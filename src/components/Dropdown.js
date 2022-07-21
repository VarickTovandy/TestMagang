import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <a href
                ={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;