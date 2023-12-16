import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./subcomponents/Logo/Logo";
import Socials from "./subcomponents/Socials/Socials";
import Burger from "./subcomponents/Burger/Burger";

import { MENU } from "../../utils/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="header">
      <div className="container">
        <header>
          <Logo />
          <nav className={`menu ${isOpen ? "open" : ""}`}>
            {MENU.map((item) => (
              <NavLink
                key={item.link}
                to={`/${item.link}`}
                className="menu-item"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <Burger handleBurgerClick={handleBurgerClick} isOpen={isOpen} />
          <Socials />
        </header>
      </div>
    </section>
  );
};

export default Header;
