import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppRoutes from "../../routes/AppRoutes";

import "../../styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
