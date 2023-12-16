import React from "react";

import Section from "../../../Common/Section/Section";

import video from "../../../../images/trailer.mp4";

const VideoBanner = () => {
  return (
    <Section className="tour-banner">
      <div className="container">
        <video loop muted autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </Section>
  );
};

export default VideoBanner;
