import React from "react";
import img from "./images/image.jpg";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
  return (
    <div className="container-fluid position-relative p-0">
      {/* Image taking full width */}
      <img
        src={img}
        alt="Logo"
        className="img-fluid"
        style={{ height: "28rem", width: "121rem" }}
      />

      {/* Headline on the left side */}
      <div className="position-absolute top-50  translate-middle-y text-white text_img">
        <h2 className="img-lines ">
          Providing Everyday Canadians
          <strong>a Path to a Better Tomorrow, Today.</strong>
        </h2>
        <p className="fs-2 text-primary">Loans up to $100,000</p>
        <button type="button" className="btn btn-primary fw-bold mb-4 ">
          GET A LOAN
        </button>
        <p>Applying won’t affect your credit score</p>
      </div>
    </div>
  );
}
