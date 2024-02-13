import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./Images/img.jpg";
import "./style.css";
import Card from "./Card";
import records from "../records.json";

export default function FeaturedCard(props) {
  const { name, card } = props.data;

  return (
    <div className="container-fluid featured-card">
      <div className="container p-4">
        <h2 className="fw-bold text-white text-center mb-4">{name}</h2>
        <div className="row">
          {card.map((i) => {
            return (
              <div className="col-md-4 mt-4">
                <Card data={i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
