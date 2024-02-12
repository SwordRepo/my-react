import React from "react";
import img from "./images/star.png";
import "./style.css";


export default function Card(props) {
  console.log(props,"data")
  // const cardCount = 5;
  return (
    <div class="card col-3 p-0 mt-4 card-carosel w-75 text-start">
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
