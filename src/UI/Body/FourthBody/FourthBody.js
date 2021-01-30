import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import "./SecondBody.css";

function FourthBody() {
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
          <div className="SecondBody_div">
            <pre>No more lost opportunities</pre>
            <h4>Streamline Revenue Operations</h4>
            <br />
            <p style={{ fontSize: "18px" }}>
              Plug revenue leaks by aligning GTM & <br />
              Finance. Uncover growth opportunities
              <br /> across processes, geographies, and business
              <br /> models.
            </p>
            <br />
            <div className="row">
              <div className="col">
                <p>
                  <CheckIcon style={{ color: "green" }} /> SaaS Analytics
                </p>
                <p>
                  <CheckIcon style={{ color: "green" }} /> Order-to-revenue
                </p>
              </div>
              <div className="col">
                <p>
                  <CheckIcon style={{ color: "green" }} /> Quote-to-cash
                </p>
                <p>
                  <CheckIcon style={{ color: "green" }} /> Revenue Recognition
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
            src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-operations-graphic.svg"
            alt="sec"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default FourthBody;
