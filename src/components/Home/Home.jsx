import React from "react";

import MainBanner from "./subcomponents/MainBanner/MainBanner";
import ShopBanner from "./subcomponents/ShopBanner/ShopBanner";
import VideoBanner from "./subcomponents/VideoBanner/VideoBanner";

import TourItems from "../Tour/TourItems";
import Tracks from "../Tracks/Tracks";
import News from "../News/News";

const Home = () => {
  return (
    <main className="main">
      <MainBanner />
      <TourItems />
      <VideoBanner />
      <Tracks />
      <ShopBanner />
      <News />
    </main>
  );
};

export default Home;
