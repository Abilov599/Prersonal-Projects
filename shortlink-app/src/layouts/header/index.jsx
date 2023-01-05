import React from "react";
import shortly from "../../assets/images/Shortly.svg";
import headerImg from "../../assets/images/working_with_computer.svg";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <nav>
        <div id="nav">
          <img src={shortly} alt="Shortly" />
          <ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>
        </div>
        <div id="sign-in-up">
          <button className="btn log-in">Login</button>
          <button className="btn sign-up">Sign Up</button>
        </div>
      </nav>
      <div id="main">
        <div id="header-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div id="header-img">
          <img src={headerImg} alt="working_with_computer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
