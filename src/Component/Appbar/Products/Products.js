import React from "react";
import "./Products.css";
import ProductsUL from "./ProductsUL/ProductsUL";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForward";

function Products(props) {
  return (
    <div
      className="container-fluid Products"
      //   style={{
      //     transform: props.compo ? "translateY(0)" : "translateY(-80vh)",
      //     opacity: props.compo ? "1" : "0",
      //   }}
    >
      <br />
      <ProductsUL />
      <p>
        Supports :{" "}
        <span
          style={{
            fontSize: "10px",
            backgroundColor: "#ECECEC",
            padding: "4px",
            borderRadius: "6px",
          }}
        >
          Preferred Partner
        </span>{" "}
        <a href="/">Stripe</a>, <a href="/">Paypal</a>,{" "}
        <a href="/">Braintree</a>, <a href="/">Checkout.com</a>,{" "}
        <a href="/">GoCardless</a>,
        <a href="/"> and 27 other payment gateways</a>.
      </p>
      <p>
        Seamless integration with <a href="/">Xero</a>,{" "}
        <a href="/">QuickBooks</a>, <a href="/">Salesforce </a>,{" "}
        <a href="/">Salesforce</a>,<a href="/">+ 18 more</a>
      </p>
      <a href="/">
        Explore All the Features{" "}
        <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
      </a>
      <br />
      <br />
      <div className="belowPart"></div>
    </div>
  );
}

export default Products;
