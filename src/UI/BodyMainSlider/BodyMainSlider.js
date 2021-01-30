import React from "react";
import "./BodyMainSlider.css";
function BodyMainSlider() {
  return (
    <div className="sliderPos">
      <div className="card">
        <div className="row">
          <div className="col-4 leftCol">
            <p>Acheived</p>
            <h1 className="leftCol_h1">20x</h1>
            <p style={{ fontSize: "20px" }}>ROI with chargebee</p>
            <p>
              ________ <button className="btn btn-success">Read Story</button>
            </p>
          </div>
          <div className="col-8 rightCol">
            <p>
              “Chargebee has all the concepts of metered <br /> billing, flat
              and tiered pricing. If we decided to <br /> change the way we want
              to bill or the price
              <br /> structure, it would be accounted for, excuse the pun.”
            </p>
            <br />
            <p style={{ display: "inline" }}>
              <b>Nathan Field</b>
              <br />
              <span sytle={{ fontSize: "16px" }}>Marketing</span>
            </p>
            <img
              style={{ display: "inline", float: "right" }}
              width="160"
              alt=""
              class="img-responsive fancy"
              src="https://webstatic.chargebee.com/assets/web/351/images/case-study/drawboard/logo.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyMainSlider;
