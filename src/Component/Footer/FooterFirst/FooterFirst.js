import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./FooterFirst.css";
function FooterFirst() {
  return (
    <div>
      <div className="container firstfooter">
        <p className="footer_p">
          Product <ArrowForwardIosIcon style={{ fontSize: "17px" }} />
        </p>
        <ul>
          <li>
            <a href="">Subscription Management</a>
          </li>
          <li>
            <a href="">Recurring Billing and Invoicing</a>
          </li>
          <li>
            <a href="">Recurring Payments</a>
          </li>
          <li>
            <a href="">Accounting and Taxes</a>
          </li>
          <li>
            <a href="">SaaS Reporting</a>
          </li>
          <li>
            <a href="">Enterprise Billing</a>
          </li>
          <li>
            <a href="">Integration</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterFirst;
