import React from "react";
import { Link } from "react-router-dom";

import { getLocalDateString } from "../../utils/common";

import Section from "../Common/Section/Section";
import Title from "../Common/Title/Title";
import Icon from "../Common/Icon/Icon";
import Loader from "../Common/Loader/Loader";

import { useTracksItems } from "../../hooks/useTracksItems";
import { usePlayAudio } from "../../hooks/usePlayAudio";

const Tracks = () => {
  const { items = [], isLoading } = useTracksItems();

  const { playing, currentTrack, handleTrackClick } = usePlayAudio();

  return (
    <Section className="tracks">
      <div className="container">
        <Title text="Tracks" />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="tracks-list">
            {items.map((item) => (
              <div
                className="tracks-item"
                key={item.sys.id}
                onClick={() => handleTrackClick(item)}
              >
                <div className="tracks-image">
                  <img src={item.cover.url} alt={item.title} />
                  {playing && currentTrack.sys.id === item.sys.id && (
                    <div className="bgWrapper">
                      <Icon name="pause" />
                    </div>
                  )}
                </div>
                <div className="tracks-info">
                  <h3 className="tracks-title">{item.title}</h3>
                  <p className="tracks-date">
                    {getLocalDateString(item.date, { month: "short" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Link to="/tracks" className="button-more">
        All releases
      </Link>
    </Section>
  );
};

export default Tracks;
