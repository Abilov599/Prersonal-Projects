import React from "react";
import shortly from "../../assets/images/logo/Shortly.svg";
import headerImg from "../../assets/images/working_with_computer.svg";
import BtnGetStarted from "../../components/btn-get-started";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <nav>
        <div id="nav">
          <img src={shortly} alt="Shortly" />
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="#footer">Resources</a>
            </li>
          </ul>
        </div>
        <div id="sign-in-up">
          <button className="btn log-in">Login</button>
          <button className="btn sign-up">Sign Up</button>
        </div>
      </nav>
      <div id="header-main">
        <div id="header-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <BtnGetStarted />
        </div>
        <div id="header-img">
          <img src={headerImg} alt="working_with_computer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
