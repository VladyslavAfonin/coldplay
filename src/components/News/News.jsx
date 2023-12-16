import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Section from "../Common/Section/Section";
import Title from "../Common/Title/Title";
import Icon from "../Common/Icon/Icon";
import Loader from "../Common/Loader/Loader";

import { SLIDER_BUTTON_TYPES } from "../../utils/constants";
import { useNewsItems } from "../../hooks/useNewsItems";

import "swiper/css";

const News = () => {
  const { PREV, NEXT } = SLIDER_BUTTON_TYPES;

  const sliderRef = useRef();

  const { items = [], isLoading } = useNewsItems();

  const handleBtnClick = useCallback(
    (type) => {
      if (!sliderRef.current) return;

      const { swiper } = sliderRef.current;

      type === NEXT ? swiper.slideNext() : swiper.slidePrev();
    },
    [NEXT]
  );

  return (
    <Section className="news">
      <div className="container">
        <Title text="Last News" />
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="news-list"
            navigation
            modules={[Navigation]}
          >
            {items.map((item) => (
              <SwiperSlide key={item.sys.id}>
                <Link to={`/news/${item.sys.id}`} className="news-item">
                  <div className="news-img">
                    <img src={item.cover.url} alt={item.title} />
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                </Link>
              </SwiperSlide>
            ))}
            <div className="navigation">
              <div
                className="navigation-button navigation-prev"
                onClick={() => handleBtnClick(PREV)}
              >
                <Icon name="slider-arrow" />
              </div>
              <div
                className="navigation-button navigation-next"
                onClick={() => handleBtnClick(NEXT)}
              >
                <Icon name="slider-arrow" />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </Section>
  );
};

export default News;
