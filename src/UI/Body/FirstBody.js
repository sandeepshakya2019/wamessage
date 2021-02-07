import React from "react";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./FirstBody.css";
import FooterStick from "../../Component/Footer/FooterSticky/FooterStick";

function FirstBody() {
  return (
    <div className="FirstBody">
      <div className="topMargin">
        <center>
          <h1 className="FirstBody_h1_1">
            Subscription Billing & Revenue Operations
          </h1>
          <h1 className="FirstBody_h1_2">for Fast-growth B2B SaaS</h1>
          <br />

          <p className="FirstBody_p">
            Get the operational sophistication to achieve, sustain, <br />
            and scale recurring revenue.
          </p>
          <br />
          <Button
            variant="contained"
            className="FirstBody_btn"
            style={{ backgroundColor: "#5e24c8", color: "white" }}
          >
            <span className="bodybuttonhover">
              Schedule a Demo <ArrowForwardIcon className="arrowhover" />
            </span>
          </Button>
          <Button
            variant="contained"
            className="FirstBody_btn"
            style={{
              backgroundColor: "white",
              color: "blue",

              border: "1px solid blue",
            }}
          >
            <span className="hoverCl">SignUp for Free</span>
            <ArrowForwardIcon />
          </Button>
        </center>
      </div>
      <FooterStick />
    </div>
  );
}

export default FirstBody;
