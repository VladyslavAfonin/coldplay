import React from "react";
import { Link } from "react-router-dom";

import Section from "../../../Common/Section/Section";

import photo from "../../../../images/coldplay.png";

const ShopBanner = () => {
  return (
    <Section className="shop-banner">
      <div className="container">
        <div className="shop-banner__wrapper">
          <div className="shop-banner__text">
            <h3 className="shop-banner__title">Coldplay</h3>
            <p className="shop-banner__subtitle">Updated FANS' Merch Store</p>
            <Link to="/shop" className="shop-banner__btn">
              Buy Now
            </Link>
          </div>
          <div className="shop-banner__photo">
            <img src={photo} alt="storePhoto" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ShopBanner;
