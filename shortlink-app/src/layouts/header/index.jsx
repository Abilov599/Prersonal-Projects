import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div id="nav">
        <img src="../../assets/images/Shortly.svg" alt="Shortly" />
        <ul>
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Resources</NavLink>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
