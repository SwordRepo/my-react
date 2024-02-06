import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/img.jpg";

function FeaturedCard() {
  return (
    <div className="container-fluid bg-dark">
      <div className="container">
        <div className="row card-row">
          <h2 className="fw-bold text-white text-center mb-4">Featured</h2>
          <div class="card col-3 p-0 mt-4 mx-4 card-prop">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title mb-4 fw-bold fs-3">
                Get a 2% lower rate with a co-applicant
              </h5>
              <p class="card-text card-body-text">
                Lower your rate and get approved for more money when you borrow
                together.
              </p>
              <a href="#" class="btn btn-primary fw-bold my-4">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card col-3 p-0 mt-4  mx-4 card-prop">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title mb-4 fw-bold fs-3">
                Get a 2% lower rate with a co-applicant
              </h5>
              <p class="card-text card-body-text">
                Lower your rate and get approved for more money when you borrow
                together.
              </p>
              <a href="#" class="btn btn-primary fw-bold my-4">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card col-3 p-0 mt-4  mx-4 card-prop">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title mb-4 fw-bold fs-3">
                Get a 2% lower rate with a co-applicant
              </h5>
              <p class="card-text card-body-text">
                Lower your rate and get approved for more money when you borrow
                together.
              </p>
              <a href="#" class="btn btn-primary fw-bold my-4">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
