import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./SecondBody.css";

function SecondBody() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col">
          <div className="SecondBody_div">
            <pre>No more spreadsheet errors</pre>
            <h4>Automate Recurring Billing</h4>
            <br />
            <p style={{ fontSize: "18px" }}>
              Scale your SaaS through 480+ recurring billing
              <br /> scenarios that automate who you bill,
              <br /> when, and how. No humans, no <br />
              spreadsheets, no missed payments!
            </p>
            <br />
            <div className="row">
              <div className="col">
                <p>
                  <CheckIcon style={{ color: "green" }} /> Billing Schedules
                </p>
                <p>
                  <CheckIcon style={{ color: "green" }} /> Tax Management
                </p>
              </div>
              <div className="col">
                <p>
                  <CheckIcon style={{ color: "green" }} /> Proration & Invoicing
                </p>
                <p>
                  <CheckIcon style={{ color: "green" }} /> Payment Methods
                </p>
              </div>
            </div>
            <Button
              variant="contained"
              style={{
                fontSize: "12px",
                backgroundColor: "white",
                color: "blue",
                marginTop: "20px",
                border: "1px solid blue",
              }}
            >
              Learn More
              <ArrowForwardIcon
                style={{
                  fontSize: "15px",
                  marginLeft: "2px",
                  fontWeight: "bold",
                }}
              />
            </Button>
          </div>
        </div>
        <div className="col">
          <img
            src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/recurring-billing-graphic.svg"
            alt="sec"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondBody;
