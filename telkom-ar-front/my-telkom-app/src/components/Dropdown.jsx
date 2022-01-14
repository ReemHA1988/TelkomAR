import React, { useState } from "react";
import { shopDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "../style/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "shop-submenu clicked" : "shop-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {shopDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
