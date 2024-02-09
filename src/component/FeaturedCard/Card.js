import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/img.jpg";
import "./style.css";
import records from "../records.json";

export default function Card() {
  return (
    <div>
      <div class="card col-3 col-md-2 p-0 mt-4  card-prop">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title mb-4 fw-bold fs-3">
            {records
              .filter((r) => r.id === 3)
              .map((r) => (
                <span key={r.id}>{r.cardText}</span>
              ))}
          </h5>
          <p class="card-text card-body-text">
            {records
              .filter((r) => r.id === 4)
              .map((r) => (
                <span key={r.id}>{r.cardText}</span>
              ))}
          </p>
          <a href="#" class="btn btn-primary fw-bold my-4">
            {records
              .filter((r) => r.id === 5)
              .map((r) => (
                <span key={r.id}>{r.cardBtn}</span>
              ))}
          </a>
        </div>
      </div>
    </div>
  );
}
