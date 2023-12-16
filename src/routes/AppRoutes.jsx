import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/Home/Home";

import TourPage from "../pages/TourPage";
import TracksPage from "../pages/TracksPage";
import NewsPage from "../pages/NewsPage";
import SingleNewsPage from "../pages/SingleNewsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/tracks" element={<TracksPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<SingleNewsPage />} />
    </Routes>
  );
};

export default AppRoutes;
