import React from "react";

import FooterForm from "./subcomponents/FooterForm/FooterForm";
import Logo from "../Header/subcomponents/Logo/Logo";
import Socials from "../Header/subcomponents/Socials/Socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <FooterForm />

          <div className="footer-info">
            <Logo />
            <p>COLDPLAY, {year}</p>
          </div>

          <Socials width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
