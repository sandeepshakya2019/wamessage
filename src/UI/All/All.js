import React from "react";
import MenuAppBar from "../../Component/Appbar/MenuAppBar";
import Footer from "../../Component/Footer/Footer";
import FirstBody from "../Body/FirstBody";
import FourthBody from "../Body/FourthBody/FourthBody";
import SecondBody from "../Body/SecondBody/SecondBody";
import ThirdBody from "../Body/ThirdBody/ThirdBody";
import MainSecBody from "../MainSecBody/MainSecBody";
import SlidingCompo from "../SlidingCompo/SlidingCompo";
function All() {
  return (
    <>
      <MenuAppBar />
      <FirstBody />
      <SlidingCompo />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <MainSecBody />
      <Footer />
    </>
  );
}

export default All;
