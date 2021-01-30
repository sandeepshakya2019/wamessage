import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./ThirdBody.css";

function ThirdBody() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col">
          <center>
            <img
              src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/subscription-graphic.svg"
              alt="sec2"
              className="ThirdBody_img"
            />
          </center>
        </div>
        <div className="col">
          <div className="ThirdBody_p">
            <pre>No more developer dependency</pre>
            <h4>Smarter Subscription Management</h4>
            <br />
            <p style={{ fontSize: "18px" }}>
              Experiment rapidly with pricing structures,
              <br /> product catalogs, and subscription lifecycles <br />
              with a business-user-first experience.
            </p>
            <br />
            <div className="row">
              <div className="col">
                <p>
                  <CheckIcon style={{ color: "green" }} /> Price modeling
                </p>
                <p>
                  <CheckIcon style={{ color: "green" }} /> Trial management
                </p>
              </div>
              <div className="col">
                <p>
                  <CheckIcon style={{ color: "green" }} /> Product Catalog
                </p>
                <p>
                  <CheckIcon style={{ color: "green" }} /> Lifecycle automation
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
      </div>
    </div>
  );
}

export default ThirdBody;
