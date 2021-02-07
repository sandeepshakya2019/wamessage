import React from "react";
import "./Footer.css";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterFirst from "./FooterFirst/FooterFirst";
import FooterFour from "./FooterFour/FooterFour";
import FooterSecond from "./FooterSecond/FooterSecond";
// import FooterStick from "./FooterSticky/FooterStick";
import FooterThird from "./FooterThird/FooterThird";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container footer one">
        <div className="row">
          <div className="col">
            <h2>
              Still unsure? Step Inside and See
              <br />
              What The Future Looks Like.
            </h2>
          </div>
          <div className="col">
            <center>
              <Button
                variant="contained"
                className="FirstBody_btn"
                style={{ backgroundColor: "#5e24c8", color: "white" }}
              >
                Schedule a Demo <ArrowForwardIcon />
              </Button>
            </center>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <br />
      <br />
      <div className="container footer">
        <div className="row">
          <div className="col">
            <FooterFirst />
          </div>
          <div className="col">
            <FooterSecond />
          </div>
          <div className="col">
            <FooterThird />
          </div>
          <div className="col">
            <FooterFour />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <FooterBottom />
      <br />
      <br />
      <br />
    </>
  );
}

export default Footer;
