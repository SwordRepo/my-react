import React from "react";
import "./style.css";
export default function Button({ btnName }) {
  return (
    <div>
      <a href="#" className="btn btn-primary fw-bold my-4 button">
        {btnName}
      </a>
    </div>
  );
}
