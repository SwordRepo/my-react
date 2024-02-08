import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/img.jpg";
import "./style.css";
import Card from "./Card";
import records from "../records.json";

export default function FeaturedCard() {
  const cardCount = 3;
  return (
    <div className="container-fluid featured-card">
      <div className="container">
        <div className="row card-row">
          <h2 className="fw-bold text-white text-center mb-4">
            {records.map((r) => r.cardHead)}
          </h2>
          {Array.from({ length: cardCount }, (_, index) => (
            <div className="col-4">
              <Card key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
