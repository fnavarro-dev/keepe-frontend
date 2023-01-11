import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarKeepeComponent, FooterComponent, BootCard } from "../components";
// import "../Assets/css/styleHome.css";

const ReservePage = () => {
  return (
    <>
      <NavbarKeepeComponent />
      <BootCard />
      <FooterComponent />
    </>
  );
};

export default ReservePage;
