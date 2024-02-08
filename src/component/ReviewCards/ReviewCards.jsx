import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./images/logo.png";
import woman from "./images/person.avif";
import "./style.css";

import Card from "./Card";
export default function ReviewCards() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const cardCount = 5;
  const renderCustomArrow = ({ type, onClick }) => (
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
  );

  return (
    <div>
      <div className="container-fluid review-container">
        <div className=" container">
          <div className="row">
            <div className="col-2">
              <img src={woman} alt="" className="image-women" />
            </div>
            <div className="col-10">
              <Carousel itemsToShow={3} renderArrow={renderCustomArrow}>
                {Array.from({ length: cardCount }, (_, index) => (
                  <div className="rate-img">
                    <Card />
                  </div>
                ))}
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
