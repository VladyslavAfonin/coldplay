import React from "react";

import Icon from "../../../Common/Icon/Icon";

import { SOCIALS } from "../../../../utils/constants";

const Socials = ({...rest}) => {
  return (
    <ul className="socials">
      {SOCIALS.map((item) => (
        <li className="socials-item" title={item.icon} key={item.link}>
          <a href={item.link} target="__blank">
            <Icon name={item.icon} {...rest} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
