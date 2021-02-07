import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function FooterThird() {
  return (
    <div>
      <div className="container firstfooter">
        <p className="footer_p">
          Resources <ArrowForwardIosIcon style={{ fontSize: "17px" }} />
        </p>
        <ul>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Compare Payment Gateways</a>
          </li>
          <li>
            <a href="/">Tackling Payment Failures</a>
          </li>
          <li>
            <a href="/">Enterprise Billing Guide</a>
          </li>
          <li>
            <a href="/">Webinars</a>
          </li>
          <li>
            <a href="/">Glossaries</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterThird;
