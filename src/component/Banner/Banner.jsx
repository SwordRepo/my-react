import React from "react";
import img from "./images/banner.jpg";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import records from "../records.json";

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

      {/* <div className="container position-absolute top-50  translate-middle-y  text_img text-start">
        <p className="img-lines fs-1">
          {records.map((r) => (
            <span key={r.id}>{r.BannerText}</span>
          ))}
          {records.map((r) =>
            r.id === 2 ? <strong key={r.id}>{r.BannerText}</strong> : null
          )}
        </p>

        <p className="fs-2 text-primary">Loans up to $100,000</p>
        <button type="button" className="btn btn-primary fw-bold mb-4 ">
          GET A LOAN
        </button>
        <p>Applying won’t affect your credit score</p>
      </div> */}
      <div className="container position-absolute top-0 w-25 text-start text_img">
        <span className="fs-2">
          {records.map((r) => (
            <span key={r.id}>{r.BannerText}</span>
          ))}
        </span>
        <span className="ban-text fs-2">
          {records.map((r) => (
            <span key={r.id}>{r.BannerText1}</span>
          ))}
        </span>

        <p className="fs-2 text-primary">Loans up to $100,000</p>
        <button type="button" className="btn btn-primary fw-bold mb-4 ">
          GET A LOAN
        </button>
        <p>Applying won’t affect your credit score</p>
      </div>
    </div>
  );
}
