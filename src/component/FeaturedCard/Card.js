import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/img.jpg";
import "./style.css";

export default function Card(props) {
  return (
    <div>
      <div class="card ">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title mb-4 fw-bold fs-3 feature-card-text">
            {props.data.cardHead}
          </h5>
          <p class="card-text card-body-text">{props.data.cardBody}</p>
          <a href="#" class="btn btn-primary fw-bold my-4">
            {props.data.cardBtn}
          </a>
        </div>
      </div>
    </div>
  );
}
