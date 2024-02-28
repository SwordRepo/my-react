// Card.js
import React, { useState } from "react";
import Button from "../button/Button";
import "./style.css";

function TestCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="col-sm-12 col-lg-4 d-lg-flex pb-3">
      <div className={`card ${isHovered ? "hovered" : ""}`}>
        <img src={props.data.img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title mb-4 fw-bold fs-3 feature-card-text">
            {props.data.cardHead}
          </h5>
          <p className="card-text card-body-text">{props.data.cardBody}</p>
        </div>
        <div
          className={`footer ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <Button btnName={props.data.cardBtn} className="sticky-bottom" />
          {/* Render extra content only when hovered */}
          {isHovered && (
            <div className="extra-content">
              <img src={props.data.img} className="card-img-top" alt="..." />
              {props.data.cardBody}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default TestCard;
