import React from "react";
import { Card } from "react-bootstrap";

import one from "./images/ban.webp";
import two from "./images/img.jpg";
import woman from "./images/person.avif";
import img from "./images/star.png";

import { Carousel } from "react-bootstrap";
function ReviewCard() {
  return (
    <div className="container-fluid review-container">
      <img src={woman} alt="" className="image-women" />
      <div className="container">
        <div className="row card-row">
          <Carousel interval={3000}>
            <Carousel.Item>
              <div class="card col-3 p-0 mt-4 mx-4 ">
                <div class="card-body card-review">
                  <h5 class="card-title mb-4 fw-bold fs-3">Steve</h5>
                  <div className="rating-star">
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                  </div>

                  <p class="card-text card-body-text">
                    I found that the people are very helpful and understanding,
                    I would definitely recommend them.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card col-3 p-0 mt-4 mx-4 ">
                <div class="card-body card-review">
                  <h5 class="card-title mb-4 fw-bold fs-3">Steve</h5>
                  <div className="rating-star">
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                  </div>

                  <p class="card-text card-body-text">
                    I found that the people are very helpful and understanding,
                    I would definitely recommend them.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card col-3 p-0 mt-4 mx-4 ">
                <div class="card-body card-review">
                  <h5 class="card-title mb-4 fw-bold fs-3">Steve</h5>
                  <div className="rating-star">
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                  </div>

                  <p class="card-text card-body-text">
                    I found that the people are very helpful and understanding,
                    I would definitely recommend them.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="card col-3 p-0 mt-4 mx-4 ">
                <div class="card-body card-review">
                  <h5 class="card-title mb-4 fw-bold fs-3">Steve</h5>
                  <div className="rating-star">
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                    <img src={img} alt="" className="image-rating" />
                  </div>

                  <p class="card-text card-body-text">
                    I found that the people are very helpful and understanding,
                    I would definitely recommend them.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item components as needed */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
