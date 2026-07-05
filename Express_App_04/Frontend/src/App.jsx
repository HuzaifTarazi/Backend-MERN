import React from "react";
import { Outlet } from "react-router";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/footer/Footer";

const App = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
