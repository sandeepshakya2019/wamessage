import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function FooterFour() {
  return (
    <div>
      <div className="container firstfooter">
        <p className="footer_p">
          Company <ArrowForwardIosIcon style={{ fontSize: "17px" }} />
        </p>
        <ul>
          <li>
            <a href="/">Customer</a>
          </li>
          <li>
            <a href="/">Partners</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterFour;
