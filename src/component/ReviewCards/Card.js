import React from "react";
import img from "./images/star.png";
import "./style.css";
import records from "../records.json";

export default function Card() {
  const cardCount = 5;
  return (
    <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
      <div class="card-body card-review">
        <p class="card-title mb-4 fw-bold ">{records.map((r) => r.name)}</p>
        <div className="rating-star d-flex ">
          {Array.from({ length: cardCount }, (_, index) => (
            <img src={img} alt="" className="image-rating" />
          ))}
        </div>

        <p class="card-text card-body-text text-start">
          {records.map((r) => r.reviewCard)}
        </p>
      </div>
    </div>
  );
}
