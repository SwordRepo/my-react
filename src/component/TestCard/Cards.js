import React from "react";
import TestCard from "./TestCard";

export default function Cards(props) {
  const { name, card } = props.data;

  return (
    <div className="container-fluid featured-card">
      <div className="container p-4">
        <h2 className="fw-bold text-white text-center mb-4">{name}</h2>
        <div className="row">
          {card.map((i) => {
            return <TestCard data={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
