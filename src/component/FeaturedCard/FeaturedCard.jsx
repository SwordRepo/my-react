import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
import Card from "./Card";
import Cardtest from "./Cardtest";

export default function FeaturedCard(props) {
  const { name, card } = props.data;

  return (
    <div className="container-fluid featured-card">
      <div className="container p-4">
        <h2 className="fw-bold text-white text-center mb-4">{name}</h2>
        <div className="row">
          {card.map((i) => {
            return <Card data={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
