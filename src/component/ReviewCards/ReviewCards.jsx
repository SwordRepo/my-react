import React from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./images/logo.png";
import woman from "./images/person.avif";
import "./style.css";

import Card from "./Card";
export default function ReviewCards(props) {
  console.log(props, "hi");
  const { heading, img, reviews } = props.data;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
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
        marginTop: "8rem",
        color: "#005DA5",
        fontWeight: "600",
      }}
    >
      {type === "PREV" ? "<" : ">"}
    </div>
  );

  return (
    <div>
      <div className="container-fluid review-container">
        <div className=" container">
          <div className=" row">
            <div className="col-sm-12 col-md-3 col-lg-3  ">
              <img src={woman} alt="" className="image-women" />
            </div>

            <div className="col-sm-12 col-md-9 col-lg-9  ">
              <Carousel
                breakPoints={breakPoints}
                renderArrow={renderCustomArrow}
              >
                {/* <div className="row"> */}
                {reviews.map((i) => {
                  return <Card data={i} />;
                })}
                {/* </div> */}
              </Carousel>
              <div className="text-center">
                <img src={logo} alt="" className="text-center" />
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 image-women-center ">
              <img src={woman} alt="" className="image-women-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
