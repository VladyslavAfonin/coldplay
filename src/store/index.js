import { configureStore } from "@reduxjs/toolkit";

import tourReducer from "../reducers/tourReducer";
import newsReducer from "../reducers/newsReducer";
import tracksReducer from "../reducers/tracksReducer";

export const store = configureStore({
  reducer: {
    tour: tourReducer,
    tracks: tracksReducer,
    news: newsReducer,
  },
  devTools: true,
});
