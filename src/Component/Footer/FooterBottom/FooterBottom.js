import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./FooterBottom.css";
function FooterBottom() {
  return (
    <div className="container footerbottom">
      <div className="row">
        <div className="col">
          <img
            src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
            style={{ width: "20%" }}
          />
        </div>
        <div className="col">
          <div className="social_icon">
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
            <YouTubeIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
