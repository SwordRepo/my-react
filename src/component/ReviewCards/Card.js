import React from "react";
import img from "./images/star.png";
import "./style.css";

export default function Card(props) {
  console.log(props, "data");
  // const cardCount = 5;
  return (
    <div class="card mx-2 mt-5 review-card-head">
      <div class="card-body card-review ">
        <p class="card-title mb-4 fw-bold ">{props.data.name}</p>
        <div className="rating-star d-flex ">
          {Array.from({ length: props.data.rating }, (_, index) => (
            <img src={img} alt="" className="image-rating" />
          ))}
        </div>

        <p class="card-text card-body-text text-start">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}
