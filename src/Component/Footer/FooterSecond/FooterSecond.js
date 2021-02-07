import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function FooterSecond() {
  return (
    <div>
      <div className="container firstfooter">
        <p className="footer_p">
          Help & Support <ArrowForwardIosIcon style={{ fontSize: "17px" }} />
        </p>
        <ul>
          <li>
            <a href="/">Security</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Status</a>
          </li>
          <li>
            <a href="/">Product Documentation</a>
          </li>
          <li>
            <a href="/">API Documentation</a>
          </li>
          <li>
            <a href="/">Support Payment Gateway</a>
          </li>
          <li>
            <a href="/">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSecond;
