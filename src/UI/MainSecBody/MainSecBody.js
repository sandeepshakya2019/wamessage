import React from "react";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./MainSecBody.css";
import BodyMainSlider from "../BodyMainSlider/BodyMainSlider";

function MainSecBody() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path
          fill=" #8a2be2"
          fill-opacity="1"
          d="M0,160L1440,64L1440,320L0,320Z"
        ></path>

        <path
          fill="#2b1569"
          fill-opacity="1"
          d="M0,192L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
      <div style={{ backgroundColor: "#2b1569" }}>
        <div className="container mainBody">
          <div className="mainBody_first">
            <h1 className="MainBody_h1">
              Works With Your
              <br />
              Revenue Management Stack
            </h1>
            <br />
            <p className="MainBody_p">
              Managing sales, payments, customer experience or your books:
              <br /> if it affects your revenue cycle, Chargebee works with it.
            </p>

            <img
              src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-management.svg"
              alt="mainSec"
            />
          </div>
          <div className="row mainBody_firstcol">
            <div className="col">
              <pre className="premain">Quote-to-Cash Automation</pre>
              <p className="MainSec_p2">Powers Sales and Marketing CRM</p>

              <img
                src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/crm-logos.png"
                className="MainBodySec_img"
                alt="img2"
              />

              <p className="MainSec_p3">
                Handle quotes, approvals, acceptance, and <br />
                collections seamlessly from within the CRM.
              </p>
              <br />
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
            <div className="col">
              <pre className="premain">Offer More Payment Methods</pre>
              <p className="MainSec_p2">25+ Payment Gateways</p>
              <p className="some_special">Preferred Partner</p>
              <hr style={{ color: "#1d0b4e", border: "1px solid #1d0b4e" }} />

              <img
                src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/pg-logos.png"
                className="MainBodySec_img"
                alt="img2"
              />
              <br />
              <br />
              <p className="MainSec_p3">
                Accept payments across a wide array of <br />
                gateways, geographies, and currencies.
              </p>
              <br />
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
          <div className="mainBody_seccol">
            <pre className="premain">Streamline Finance Operations</pre>
            <p className="MainSec_p2">Syncs with Accounting Software</p>
            <img
              src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/acc-logos.png"
              className="MainBodySec_img2"
              alt="img2"
            />
            <br />
            <br />
            <p className="MainSec_p3">
              Reconcile books in seconds, handle
              <br /> compliance, and recognize revenue <br />
              painlessly.
            </p>
            <br />
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="mainBody_third">
            <div className="row">
              <center>
                <div className="col">
                  <div className="row">
                    <div className="col ">
                      <p className="mainBody_p4">
                        Talk to us today about
                        <br />
                        your revenue workflow
                      </p>
                    </div>
                    <div className="col">
                      <Button
                        variant="contained"
                        className="FirstBody_btn"
                        style={{ backgroundColor: "#5e24c8", color: "white" }}
                      >
                        Schedule a Demo <ArrowForwardIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <br />
          <br />
          <br />
          <br />
          <center>
            <p className="mainBody_p5">
              Great Products Deserve Hyper Growth.
              <br />
              Chargebee Makes it Easy.
            </p>
          </center>
          <br />
          <br />
          <br />
          <br />
          <div className="mainBody_slider">
            <center>
              <div className="slider_bar">
                <pre className="slide_p1">Rethink Pricing</pre>
                <pre className="slide_p1">Automante Finops</pre>
                <pre className="slide_p1">Go Global</pre>
              </div>
            </center>
            <br />
          </div>
          <BodyMainSlider />
          <br />
          <br />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8a2be2"
          fill-opacity="1"
          d="M0,96L1440,128L1440,0L0,0Z"
        ></path>
        <path
          fill="#2b1569"
          fill-opacity="1"
          d="M0,32L1440,128L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default MainSecBody;
