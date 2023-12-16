import React from "react";
import { Link } from "react-router-dom";

import { useNewsItems } from "../hooks/useNewsItems";

import Section from "../components/Common/Section/Section";
import PageTitle from "../components/Common/PageTitle/PageTitle";
import Loader from "../components/Common/Loader/Loader";
import Icon from "../components/Common/Icon/Icon";

import { getLocalDateString } from "../utils/common";

const NewsPage = () => {
  const { items = [], isLoading } = useNewsItems();

  return (
    <Section className="news-page page">
      <div className="container">
        <PageTitle text="News" />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="news-list">
            {items.map((item) => (
              <div className="news-item" key={item.sys.id}>
                <div className="news-img">
                  <img src={item.cover.url} alt={item.title} />
                </div>
                <div className="news-info">
                  <p className="news-date">
                    {getLocalDateString(item.date, { month: "short" })}
                  </p>
                  <h2 className="news-title">{item.title}</h2>
                  <Link to={`/news/${item.sys.id}`} className="news-link">
                    <span>Read now</span>
                    <Icon name="arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default NewsPage;
