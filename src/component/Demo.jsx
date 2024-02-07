import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/star.png";
import woman from "./images/person.avif";

function DemoTwo() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const iconStyle = {
    // Add your custom styles here, e.g., color
    color: "red", // Change this to the desired color
  };

  return (
    <div>
      <div className="container-fluid review-container">
        <img src={woman} alt="" className="image-women" />
        <div className="bd-example container">
          <Carousel breakPoints={breakPoints} itemsToShow={1} infiniteLoop>
            <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
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
                  I found that the people are very helpful and understanding, I
                  would definitely recommend them.
                </p>
              </div>
            </div>
            <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
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
                  I found that the people are very helpful and understanding, I
                  would definitely recommend them.
                </p>
              </div>
            </div>
            <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
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
                  I found that the people are very helpful and understanding, I
                  would definitely recommend them.
                </p>
              </div>
            </div>
            <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
              <div class="card-body card-review">
                <h5 class="card-title mb-4 fw-bold fs-3">Maha</h5>
                <div className="rating-star">
                  <img src={img} alt="" className="image-rating" />
                  <img src={img} alt="" className="image-rating" />
                  <img src={img} alt="" className="image-rating" />
                  <img src={img} alt="" className="image-rating" />
                  <img src={img} alt="" className="image-rating" />
                </div>

                <p class="card-text card-body-text">
                  I found that the people are very helpful and understanding, I
                  would definitely recommend them.
                </p>
              </div>
            </div>
            <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
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
                  I found that the people are very helpful and understanding, I
                  would definitely recommend them.
                </p>
              </div>
            </div>
            <div class="card col-3 p-0 mt-4 mx-4 card-carosel">
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
                  I found that the people are very helpful and understanding, I
                  would definitely recommend them.
                </p>
              </div>
            </div>
            {/* Add two more divs for the remaining two cards */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default DemoTwo;
