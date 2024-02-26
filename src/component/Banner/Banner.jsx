import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../button/Button";
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
      <img src={img} className="img-banner" alt="Logo" />

      <div className="container">
        <div className="hero-banner">
          <div className="text-dec">
            <h1 className="text_img ">
              {bannerHeader}
              <strong className="bannerHeaderline">{bannerHeaderline}</strong>
            </h1>
          </div>
          <p className=" text-primary banner-sub-header">{bannerSubHeader}</p>
          <div className="btn-banner">
            <a href="#" className="btn  banner-btn fw-bold my-lg-4  btn-btn">
              {bannerBtn}
            </a>
          </div>

          <p className="banner-footer-text">{bannerText}</p>
        </div>
      </div>
    </div>
  );
}
