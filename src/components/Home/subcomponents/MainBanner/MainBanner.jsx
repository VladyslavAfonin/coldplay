import React from "react";

import Section from "../../../Common/Section/Section";

import animatedLogo from "../../../../images/gif-banner.gif";

const MainBanner = () => {
  return (
    <Section>
      <div className="container">
        <h1 style={{ fontSize: 0, lineHeight: 0 }}>COLDPLAY</h1>
        <div className="banner">
          <img className="banner-gif" src={animatedLogo} alt="banner" />
        </div>
      </div>
    </Section>
  );
};

export default MainBanner;
