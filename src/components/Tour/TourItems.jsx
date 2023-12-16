import React from "react";
import { Link } from "react-router-dom";

import { useTourItems } from "../../hooks/useTourItems";

import { sortByDate } from "../../utils/common";

import Section from "../Common/Section/Section";
import Title from "../Common/Title/Title";
import Loader from "../Common/Loader/Loader";

import TourItem from "./subcomponents/TourItem/TourItem";

const TourItems = () => {
  const { items = [], isLoading } = useTourItems();

  const filteredItems = sortByDate(items.filter((item) => item));

  return (
    <Section className="tour">
      <div className="container">
        <Title text="Concerts" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tour-list">
            {filteredItems.map((item) => (
              <TourItem key={item.sys.id} {...item} />
            ))}
          </ul>
        )}
        <Link to="/tour" className="button-more">
          All Concerts
        </Link>
      </div>
    </Section>
  );
};

export default TourItems;
