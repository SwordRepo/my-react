import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/img.jpg";
import "./style.css";
import Button from "../button/Button";
export default function Card(props) {
  return (
    <div class="col-sm-12 col-md-4 col-lg-4 d-flex pb-3">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title mb-4 fw-bold fs-3 feature-card-text">
            {props.data.cardHead}
          </h5>
          <p class="card-text card-body-text">{props.data.cardBody}</p>
        </div>
        <div className="text-center">
          <Button btnName={props.data.cardBtn} class="sticky-bottom" />
        </div>
      </div>
    </div>
  );
}
