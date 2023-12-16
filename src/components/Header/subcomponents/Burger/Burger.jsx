import React from "react";

const Burger = ({isOpen, handleBurgerClick}) => {
  return (
    <div
      className={`burger ${isOpen ? "open" : ""}`}
      onClick={handleBurgerClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
