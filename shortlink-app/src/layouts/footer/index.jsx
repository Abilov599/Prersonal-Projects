import React from "react";
import BtnGetStarted from "../../components/btn-get-started";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div id="footer-top">
        <h1>Boost your links today</h1>
        <BtnGetStarted />
      </div>
      <div id="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
