import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
import Homepage from "../components/Homepage.js";
import ToS from "../components/TermsOfService.js";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <Homepage />
      <ToS />
    </div>
  );
};

export default MainContainer;
