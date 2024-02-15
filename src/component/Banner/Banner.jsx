import React from "react";
import img1 from "./images/ban5.webp";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner(props) {
  const {
    img,
    bannerHeader,
    bannerSubHeader,
    bannerBtn,
    bannerText,
    bannerHeaderline,
  } = props.data;
  return (
    <div className="container-fluid img-container p-0">
      {/* Image taking full width */}
      <img src={img1} className="img-banner" alt="Logo" />

      <div className="container">
        <div className="hero-banner">
          <div className="text-dec">
            <h1 className="text_img ">
              {bannerHeader}
              <strong className="bannerHeaderline">{bannerHeaderline}</strong>
            </h1>
          </div>

          <p className=" text-primary banner-sub-header">{bannerSubHeader}</p>

          <a href="#" className="btn btn-primary  banner-btn fw-bold my-lg-4 ">
            {bannerBtn}
          </a>
          <p className="banner-footer-text">{bannerText}</p>
        </div>
      </div>
    </div>
  );
}
