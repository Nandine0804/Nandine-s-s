import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/discord.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h3 className="footer-copy">Copyrights 2024 by Nandine S S</h3>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/nandine">
            <img src={navIcon1} alt=""></img>
          </a>
          <a href="https://github.com/Nandine0804">
            <img src={navIcon2} alt=""></img>
          </a>
          <a href="https://discord.gg/PTz42J4U">
            <img src={navIcon3} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
