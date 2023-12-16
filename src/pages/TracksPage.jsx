import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useTracksItems } from "../hooks/useTracksItems";
import { usePlayAudio } from "../hooks/usePlayAudio";

import Section from "../components/Common/Section/Section";
import PageTitle from "../components/Common/PageTitle/PageTitle";
import Loader from "../components/Common/Loader/Loader";
import Icon from "../components/Common/Icon/Icon";

import { getLocalDateString } from "../utils/common";

const TracksPage = () => {
  const { items = [], isLoading } = useTracksItems();

  const { playing, currentTrack, handleTrackClick } = usePlayAudio();

  return (
    <Section className="tracks-page page">
      <div className="container">
        <PageTitle text="All Tracks" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tracks-list">
            {items.map((item) => (
              <li className="tracks-item" key={item.sys.id}>
                <div className="tracks-image">
                  <img src={item.cover.url} alt={item.title} />
                </div>
                <div className="tracks-info">
                  <p className="tracks-date">
                    {getLocalDateString(item.date, { month: "short" })}
                  </p>
                  <h2 className="tracks-title">{item.title}</h2>
                  <div className="tracks-description">
                    {documentToReactComponents(item.description.json)}
                  </div>
                  <button
                    className="tracks-playBtn"
                    onClick={() => handleTrackClick(item)}
                  >
                    <span>Listen</span>
                    <Icon
                      name={
                        playing && currentTrack.sys.id === item.sys.id
                          ? "pause"
                          : "play"
                      }
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default TracksPage;
