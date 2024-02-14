import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/img.jpg";
import "./style.css";

export default function Cardtest(props) {
  return (
    <div class="col-4 d-flex pb-3">
      <div class="card ">
        <img src={img} class="card-img-top" alt="..." />
        <h3 class="card-title mb-4 fw-bold fs-3 feature-card-text">
          {" "}
          {props.data.cardHead}
        </h3>
        <p class="card-text">{props.data.cardBody}</p>
        <a href="#" class="btn btn-primary sticky-bottom fw-bold my-4">
          {props.data.cardBtn}
        </a>
      </div>
    </div>
  );
}
