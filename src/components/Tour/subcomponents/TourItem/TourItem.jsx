import React from "react";

import { getLocalDateString } from "../../../../utils/common";

const TourItem = ({
  date,
  city,
  place,
  country,
  ticketLink,
  soldOut,
}) => {
  return (
    <li className="tour-item">
      <div className="tour-item__info">
        <div className="tour-item__date">
          {getLocalDateString(date, {})}
        </div>
        <p className="tour-item__place">{place}</p>
      </div>
      <div className="tour-item__region">
        <span className="tour-item__city">{city}</span>
        <span className="tour-item__country">{country}</span>
      </div>

      <div className="tour-item__tickets">
        {soldOut ? (
          <span className="tour-item__soldOut">SOLD OUT</span>
        ) : (
          <a href={ticketLink} className="tour-item__link" target="__blank">
            BUY NOW
          </a>
        )}
      </div>
    </li>
  );
};

export default TourItem;
