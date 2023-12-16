import React, { useCallback, useEffect, useState } from "react";

import { useTourItems } from "../hooks/useTourItems";

import Section from "../components/Common/Section/Section";
import PageTitle from "../components/Common/PageTitle/PageTitle";
import Loader from "../components/Common/Loader/Loader";
import TourItem from "../components/Tour/subcomponents/TourItem/TourItem";

import { sortByDate } from "../utils/common";

const TourPage = () => {
  const { items = [], isLoading } = useTourItems();

  const [activeTab, setActiveTab] = useState(null);
  const [filtered, setFiltered] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs = [...new Set(items.map((item) => item.country))];

  const toggleTab = useCallback(
    (tab) => {
      setActiveTab(tab);
      setFiltered(sortByDate(items.filter((item) => item.country === tab)));
    },
    [items]
  );

  useEffect(() => {
    setFiltered(sortByDate(items.filter((item) => item)));
  }, [items]);

  return (
    <Section className="tour-page page">
      <div className="container">
        <PageTitle text="All Concerts" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className="tour-tabs">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`tour-tab ${
                    tab === activeTab && "tour-tab__active"
                  }`}
                  onClick={() => toggleTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <ul className="tour-list">
              {filtered.map((item) => (
                <TourItem key={item.sys.id} {...item} />
              ))}
            </ul>
          </>
        )}
      </div>
    </Section>
  );
};

export default TourPage;
