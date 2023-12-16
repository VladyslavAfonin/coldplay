import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Section from "../components/Common/Section/Section";
import Loader from "../components/Common/Loader/Loader";

import { getLocalDateString } from "../utils/common";

import { getNewsItem } from "../reducers/newsReducer";

const SingleNewsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, newsItem } = useSelector(({ news }) => news);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNewsItem(id));
  }, [dispatch, id]);

  console.log(newsItem);

  return (
    <Section className="singleNews-page page">
      <div className="container">
        {isLoading || !newsItem ? (
          <Loader />
        ) : (
          <div className="singleNews-item">
            <div className="singleNews-image">
              <img src={newsItem.cover.url} alt={newsItem.title} />
            </div>
            <h1 className="singleNews-title">{newsItem.title}</h1>
            <p className="singleNews-date">
              {getLocalDateString(newsItem.date, { month: "short" })}
            </p>
            <div className="singleNews-description">
              {documentToReactComponents(newsItem.description.json)}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default SingleNewsPage;
