import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/star.png";
import logo from "./images/logo.png";
import woman from "./images/person.avif";
import "./style.css";
export default function ReviewCards() {
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
        <div className=" container">
          <div className="row">
            <div className="col-2">
              <img src={woman} alt="" className="image-women" />
            </div>
            <div className="col-10">
              <Carousel
                itemsToShow={3}
                renderArrow={({ type, onClick }) => (
                  <div
                    onClick={onClick}
                    className={`custom-${type}-icon`}
                    style={{
                      fontSize: "2rem",
                      marginTop: "13rem",
                      color: "#005DA5",
                      fontWeight: "600",
                    }}
                  >
                    {/* Your custom icon or image */}
                    {type === "PREV" ? "<" : ">"}
                  </div>
                )}
              >
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
                      I found that the people are very helpful and
                      understanding, I would definitely recommend them.
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
                      I found that the people are very helpful and
                      understanding, I would definitely recommend them.
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
                      I found that the people are very helpful and
                      understanding, I would definitely recommend them.
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
                      I found that the people are very helpful and
                      understanding, I would definitely recommend them.
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
                      I found that the people are very helpful and
                      understanding, I would definitely recommend them.
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
                      I found that the people are very helpful and
                      understanding, I would definitely recommend them.
                    </p>
                  </div>
                </div>
                {/* Add two more divs for the remaining two cards */}
              </Carousel>
            </div>
            <div>
              <img src={logo} alt="" className="image-logo text-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
