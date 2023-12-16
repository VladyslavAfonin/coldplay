import React, { useState } from "react";

import Icon from "../../../Common/Icon/Icon";

const FooterForm = () => {
  const [email, setEmail] = useState("");

  const handleChange = (value) => {
    setEmail(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setEmail("");
  }

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <p>Want subscribe?</p>
      <div className="footer-form__email">
        <input type="email" name="email" placeholder="Enter your email here" value={email} onChange={(evt) => handleChange(evt.target.value)} />
      </div>
      <button type="submit" className="footer-form__btn">
        <span>Subscribe</span>
        <Icon name="arrow-right" />
      </button>
    </form>
  );
};

export default FooterForm;
